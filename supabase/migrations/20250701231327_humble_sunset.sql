/*
  # Create tables for AMB Barbería website

  1. New Tables
    - `contact_forms`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `created_at` (timestamp)
    
    - `enrollments`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `payment_plan` (text)
      - `modality` (text)
      - `status` (text)
      - `created_at` (timestamp)
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text)
      - `text` (text)
      - `rating` (integer)
      - `approved` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public access to insert data
    - Add policies for admin access to read data
*/

-- Create contact_forms table
CREATE TABLE IF NOT EXISTS contact_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  payment_plan text NOT NULL CHECK (payment_plan IN ('por-clase', 'quincenal', 'mensual', 'curso-completo')),
  modality text NOT NULL CHECK (modality IN ('matutino', 'vespertino', 'sabatino')),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  text text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Policies for contact_forms
CREATE POLICY "Anyone can insert contact forms"
  ON contact_forms
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact forms"
  ON contact_forms
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for enrollments
CREATE POLICY "Anyone can insert enrollments"
  ON enrollments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read enrollments"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update enrollments"
  ON enrollments
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policies for testimonials
CREATE POLICY "Anyone can insert testimonials"
  ON testimonials
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read approved testimonials"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (approved = true);

CREATE POLICY "Authenticated users can read all testimonials"
  ON testimonials
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials
  FOR UPDATE
  TO authenticated
  USING (true);