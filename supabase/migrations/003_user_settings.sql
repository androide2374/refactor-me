-- Migration: user_settings
-- Stores user preferences (view mode, theme, etc.) as a JSONB payload

CREATE TABLE IF NOT EXISTS user_settings (
  user_id TEXT NOT NULL PRIMARY KEY,
  settings JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_settings_updated
  ON user_settings(updated_at DESC);
