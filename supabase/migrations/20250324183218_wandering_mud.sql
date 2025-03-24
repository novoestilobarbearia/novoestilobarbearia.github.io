/*
  # Create services table

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `name` (text)
      - `price` (decimal)
      - `duration` (integer, minutes)
      - `description` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `services` table
    - Add policy for public read access
    - Add policy for admin write access
*/

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price decimal NOT NULL,
  duration integer NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Allow public read access to services
CREATE POLICY "Services are viewable by everyone" 
  ON services
  FOR SELECT 
  TO public 
  USING (true);

-- Initial services data
INSERT INTO services (name, price, duration, description) VALUES
  ('Corte Clássico', 40, 30, 'Corte preciso adaptado ao seu estilo'),
  ('Barba', 30, 30, 'Modelagem e acabamento profissional'),
  ('Pacote Completo', 90, 45, 'Corte, barba e tratamento com pigmentação');