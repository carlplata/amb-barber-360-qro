/**
 * AMB Landing — Image Optimization Script
 * Converts all images to WebP, resizes oversized ones, and cleans up unused files.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, mkdir, rename, unlink, readFile, writeFile } from 'fs/promises';
import { join, extname, basename, relative } from 'path';
import { existsSync } from 'fs';

const PUBLIC_DIR = join(process.cwd(), 'public');
const SRC_DIR = join(process.cwd(), 'src');
const BACKUP_DIR = join(process.cwd(), 'public', '_originals_backup');

// Max dimensions for different image types
const SIZE_RULES = {
  hero: { width: 1920, height: 1080 },       // hero/gallery backgrounds
  card: { width: 800, height: 800 },          // pricing cards, testimonials
  thumbnail: { width: 400, height: 400 },     // small icons, certificates
  logo: { width: 200, height: 200 },          // logos, small assets
};

// Quality settings
const WEBP_QUALITY = 82;
const JPEG_QUALITY = 85;

// Files that should NOT be touched
const SKIP_FILES = new Set(['favicon.ico', 'placeholder.svg', 'robots.txt']);

// Files not referenced in code → candidates for deletion
const UNUSED_FILES = [
  // Non-_real testimonials (duplicates of the _real versions)
  'testimonial_entrepreneur.png',
  'testimonial_graduate.png',
  'testimonial_hobbyist.png',
  'testimonial_mom.png',
  'testimonial_stylist.png',
  // Lovable uploads not referenced in code
  '3cef581e-9513-4c12-b030-cabf4282ba1f.png',
  'd5eedcee-431b-4a18-9d03-6ef0d4786c35.png',
  '551f6706-0853-45f5-a166-85943744aaff.png',
  'b3f65a48-d8ec-44eb-bc13-bfd5aa9725f4.png',
  '12471cee-6e75-46e7-bf58-2bf525694965.png',
];

// Determine sizing category
function getSizeCategory(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes('logo') || lower.includes('mercadopago') || lower.includes('icon')) return 'logo';
  if (lower.includes('escuela') || lower.includes('hero') || lower.includes('gallery')) return 'hero';
  if (lower.includes('testimonial') || lower.includes('pago') || lower.includes('curso') ||
      lower.includes('colorimetria') || lower.includes('fades') || lower.includes('5c0fe394')) return 'card';
  // Certificates and small items
  if (lower.includes('056b97') || lower.includes('92910c') || lower.includes('ae0a78') ||
      lower.includes('214876') || lower.includes('1dd428') || lower.includes('bd1b84') ||
      lower.includes('b70e98') || lower.includes('ed4fd9')) return 'thumbnail';
  return 'card'; // default
}

async function getAllImages(dir) {
  const results = [];
  const validExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG']);
  
  async function walk(currentDir) {
    const entries = await readdir(currentDir);
    for (const entry of entries) {
      const fullPath = join(currentDir, entry);
      const s = await stat(fullPath);
      if (s.isDirectory()) {
        if (entry === '_originals_backup' || entry === 'videos') continue;
        await walk(fullPath);
      } else if (validExts.has(extname(entry))) {
        if (!SKIP_FILES.has(entry)) {
          results.push(fullPath);
        }
      }
    }
  }
  await walk(dir);
  return results;
}

async function findAllSourceFiles(dir) {
  const results = [];
  const validExts = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html']);
  
  async function walk(currentDir) {
    const entries = await readdir(currentDir);
    for (const entry of entries) {
      const fullPath = join(currentDir, entry);
      const s = await stat(fullPath);
      if (s.isDirectory()) {
        if (entry === 'node_modules' || entry === '.git' || entry === 'dist') continue;
        await walk(fullPath);
      } else if (validExts.has(extname(entry))) {
        results.push(fullPath);
      }
    }
  }
  await walk(dir);
  return results;
}

async function optimizeImage(filePath) {
  const name = basename(filePath);
  const ext = extname(name).toLowerCase();
  const nameNoExt = basename(name, extname(name));
  const dir = join(filePath, '..');
  
  const category = getSizeCategory(name);
  const maxDims = SIZE_RULES[category];
  
  const originalSize = (await stat(filePath)).size;
  
  // Skip if already tiny (< 20KB)
  if (originalSize < 20 * 1024) {
    console.log(`  ⏭️  SKIP (already small): ${name} (${(originalSize / 1024).toFixed(0)}KB)`);
    return { name, saved: 0, skipped: true };
  }
  
  const outputPath = join(dir, `${nameNoExt}.webp`);
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    let pipeline = image;
    
    // Resize if larger than max dimensions
    if (metadata.width > maxDims.width || metadata.height > maxDims.height) {
      pipeline = pipeline.resize(maxDims.width, maxDims.height, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    
    // Convert to WebP
    await pipeline.webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(outputPath);
    
    const newSize = (await stat(outputPath)).size;
    const saved = originalSize - newSize;
    const pct = ((saved / originalSize) * 100).toFixed(1);
    
    console.log(`  ✅ ${name} → ${nameNoExt}.webp | ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${pct}% saved)`);
    
    return { name, nameNoExt, ext, originalSize, newSize, saved, outputPath, originalPath: filePath };
  } catch (err) {
    console.error(`  ❌ FAILED: ${name} — ${err.message}`);
    return { name, saved: 0, error: true };
  }
}

async function updateReferences(conversions) {
  // Build a map of old filename → new filename
  const replacements = new Map();
  for (const c of conversions) {
    if (c.skipped || c.error) continue;
    // Map original extension variants
    const oldName = c.name;
    const newName = `${c.nameNoExt}.webp`;
    if (oldName !== newName) {
      replacements.set(oldName, newName);
    }
  }
  
  if (replacements.size === 0) {
    console.log('\n📝 No references to update.');
    return;
  }
  
  // Find all source files
  const sourceFiles = await findAllSourceFiles(process.cwd());
  
  let totalUpdates = 0;
  
  for (const srcFile of sourceFiles) {
    let content = await readFile(srcFile, 'utf-8');
    let modified = false;
    
    for (const [oldName, newName] of replacements) {
      if (content.includes(oldName)) {
        content = content.replaceAll(oldName, newName);
        modified = true;
        totalUpdates++;
        console.log(`  📝 ${relative(process.cwd(), srcFile)}: "${oldName}" → "${newName}"`);
      }
    }
    
    if (modified) {
      await writeFile(srcFile, content, 'utf-8');
    }
  }
  
  console.log(`\n📝 Updated ${totalUpdates} references across source files.`);
}

async function main() {
  console.log('🖼️  AMB Image Optimizer');
  console.log('='.repeat(60));
  
  // 1. Create backup directory
  if (!existsSync(BACKUP_DIR)) {
    await mkdir(BACKUP_DIR, { recursive: true });
  }
  
  // 2. Remove unused files first
  console.log('\n🗑️  Removing unused files...');
  let freedBytes = 0;
  for (const unusedFile of UNUSED_FILES) {
    // Check in images/
    const imgPath = join(PUBLIC_DIR, 'images', unusedFile);
    const uploadPath = join(PUBLIC_DIR, 'lovable-uploads', unusedFile);
    
    for (const path of [imgPath, uploadPath]) {
      if (existsSync(path)) {
        const size = (await stat(path)).size;
        // Move to backup instead of deleting
        const backupPath = join(BACKUP_DIR, basename(path));
        await rename(path, backupPath);
        freedBytes += size;
        console.log(`  🗑️  Moved to backup: ${basename(path)} (${(size / 1024 / 1024).toFixed(2)}MB)`);
      }
    }
  }
  console.log(`  Freed: ${(freedBytes / 1024 / 1024).toFixed(2)}MB from unused files`);
  
  // 3. Optimize remaining images
  console.log('\n🔄 Optimizing images...');
  const images = await getAllImages(PUBLIC_DIR);
  console.log(`  Found ${images.length} images to process\n`);
  
  const results = [];
  for (const img of images) {
    const result = await optimizeImage(img);
    results.push(result);
  }
  
  // 4. Update source references
  console.log('\n📝 Updating source code references...');
  await updateReferences(results);
  
  // 5. Move originals to backup (only non-webp originals that were converted)
  console.log('\n📦 Backing up original files...');
  for (const r of results) {
    if (!r.skipped && !r.error && r.originalPath && extname(r.originalPath).toLowerCase() !== '.webp') {
      const backupPath = join(BACKUP_DIR, r.name);
      try {
        await rename(r.originalPath, backupPath);
        console.log(`  📦 ${r.name} → _originals_backup/`);
      } catch (err) {
        // File might have already been a .webp
      }
    }
  }
  
  // 6. Summary
  const totalSaved = results.reduce((acc, r) => acc + (r.saved || 0), 0);
  const processed = results.filter(r => !r.skipped && !r.error).length;
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log(`  Images processed: ${processed}`);
  console.log(`  Images skipped: ${results.filter(r => r.skipped).length}`);
  console.log(`  Errors: ${results.filter(r => r.error).length}`);
  console.log(`  Unused files removed: ${UNUSED_FILES.length}`);
  console.log(`  Space freed (unused): ${(freedBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Space saved (optimization): ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  TOTAL SAVED: ${((totalSaved + freedBytes) / 1024 / 1024).toFixed(2)} MB`);
  console.log('='.repeat(60));
  console.log('\n✅ Done! Originals backed up in public/_originals_backup/');
  console.log('⚠️  Remember to add _originals_backup to .gitignore');
}

main().catch(console.error);
