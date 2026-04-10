# Plan: Hamburger Menu Redesign (Content Diet + Visual Polish)

## 🚨 The Issue
The previous iteration was too tall ("Cannot be seen complete on mobile screen"). The vertical spacing (`space-y-12`, `py-5`) was excessive for a "Content Diet" approach.

## 🎨 Design & Content Diet Strategy

### 1. The "One-Screen" Rule (Content Diet)
**Goal:** The entire menu content must fit within a standard mobile viewport (approx 600-700px height) without requiring scroll if possible.

**Tactics:**
*   **Reduce Spacing:** Change `space-y-12` (3rem gap) to `space-y-6` or `space-y-4`.
*   **Compact Links:** Reduce `text-3xl` headers to `text-2xl` or `text-xl` to save vertical space.
*   **Compact CTAs:** Change `py-5` buttons to `h-12` (standard touch target) instead of padding-based sizing.
*   **Integrated Socials:** Move social icons to a compact row at the bottom, removing the large border separator if unnecessary.

### 2. Premium Aesthetics (Design Skill)
**Goal:** Maintain the "High-End" feel without the bulk.

**Tactics:**
*   **Glassmorphism:** Keep the dark backdrop but ensure it feels lightweight.
*   **Typography:** Use the `font-heading` for links but with tighter leading.
*   **Visual Hierarchy:**
    1.  **Primary Action:** "Clase Muestra" (Highlighted).
    2.  **Navigation:** Clean list.
    3.  **Secondary:** Socials/Contact.

## 🛠️ Implementation Details (`Navbar.tsx`)

### Layout Structure
```tsx
<div className="flex flex-col h-full justify-center px-6">
  {/* Navigation Links - Centered & Compact */}
  <div className="flex flex-col space-y-4 text-center mb-8">
    <Link>Horarios y Cursos</Link>
    <Link>Precios y Becas</Link>
    <Link>Certificaciones</Link>
    <Link>Ubicación</Link>
  </div>

  {/* CTA Section - Fixed Height Buttons */}
  <div className="space-y-3 w-full max-w-xs mx-auto mb-8">
     <Button className="h-12 w-full">🎁 Clase Muestra</Button>
     <Button className="h-12 w-full">📅 Ver Disponibilidad</Button>
  </div>

  {/* Socials - Compact Row */}
  <div className="flex justify-center space-x-8">
    <Icon WhatsApp />
    <Icon Instagram />
  </div>
</div>
```

### Proposed CSS Changes
*   `h-[calc(100vh-5rem)]` -> `h-[calc(100vh-4rem)]` (Adjust for smaller navbar if needed).
*   `text-3xl` -> `text-2xl`.
*   `space-y-12` -> `space-y-6` (Global container spacing).

## ✅ Verification
1.  **Visual Check:** Ensure no scrolling is needed on a simulated iPhone SE (smallest common denominator).
2.  **Touch Targets:** Verify buttons are at least 44px high.
