/*
  # Add country code to form submissions

  1. Modified Tables
    - `form_submissions`
      - Added `country_code` (text) column to store the phone country code
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'form_submissions' AND column_name = 'country_code'
  ) THEN
    ALTER TABLE form_submissions ADD COLUMN country_code text DEFAULT '+1';
  END IF;
END $$;
