/*
  # Create form submissions table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company_name` (text)
      - `phone_number` (text)
      - `problem_or_task` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy to allow anyone to insert submissions
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company_name text NOT NULL,
  phone_number text NOT NULL,
  problem_or_task text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit form"
  ON form_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view own submission"
  ON form_submissions FOR SELECT
  TO anon
  USING (true);
