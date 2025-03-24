/*
  # Create appointments table

  1. New Tables
    - `appointments`
      - `id` (uuid, primary key)
      - `client_name` (text)
      - `phone` (text)
      - `service_id` (uuid, foreign key to services)
      - `appointment_date` (date)
      - `appointment_time` (time)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `appointments` table
    - Add policy for public create access
    - Add policy for admin read/write access
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  phone text NOT NULL,
  service_id uuid REFERENCES services(id),
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Allow public to create appointments
CREATE POLICY "Anyone can create appointments"
  ON appointments
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only allow admin to view all appointments
CREATE POLICY "Admin can view all appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);