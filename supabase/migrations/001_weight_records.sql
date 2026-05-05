-- Migration: weight_records
-- Creates the table for exercise weight tracking

CREATE TABLE IF NOT EXISTS weight_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  exercise_name TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  sets JSONB NOT NULL DEFAULT '[]'::jsonb,
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_weight_records_user_exercise 
  ON weight_records(user_id, exercise_name);

CREATE INDEX IF NOT EXISTS idx_weight_records_date 
  ON weight_records(user_id, date DESC);
