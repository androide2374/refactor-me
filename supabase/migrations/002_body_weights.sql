-- Migration: body_weights
-- Creates the table for daily body weight tracking

CREATE TABLE IF NOT EXISTS body_weights (
  user_id TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  weight NUMERIC(5,1) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (user_id, date)
);

CREATE INDEX IF NOT EXISTS idx_body_weights_user_date
  ON body_weights(user_id, date DESC);
