CREATE TABLE users (
  id uuid REFERENCES auth.users NOT NULL PRIMARY KEY,
  username text,
  email text UNIQUE,
  first_name text,
  last_name text,
  phone_number text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);