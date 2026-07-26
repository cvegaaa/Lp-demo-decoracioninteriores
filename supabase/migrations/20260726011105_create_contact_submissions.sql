/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email
  - `phone` (text, nullable) — optional phone number
  - `project_type` (text, nullable) — type of project (residential, commercial, etc.)
  - `message` (text, not null) — the inquiry message
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form). No SELECT/UPDATE/DELETE to protect submission privacy.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  project_type text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
