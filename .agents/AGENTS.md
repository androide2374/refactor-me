# AGENTS.md — OnFit Focus

Spanish fitness training PWA (Astro 6 + React 19 + Tailwind CSS 4). Plans, exercise library, weight logging — client-only with optional Supabase sync.

## Commands

| Command | What |
|---|---|
| `pnpm dev` | Dev server |
| `pnpm build` | Prod build |
| `pnpm check` | Type-check (`astro check`) |
| `pnpm preview` | Preview build |

No test framework exists. Verification = `pnpm check && pnpm build`.

## Setup

Copy `.env.local.template` to `.env.local` and fill Supabase creds. App works without them (localStorage only).

## Architecture: dual persistence

Data is **first-class in localStorage** (Zustand `persist` middleware). Supabase Postgres is a secondary sync target, not the source of truth.

| Store | localStorage key | Supabase table |
|---|---|---|
| `authStore` | `onfit-auth` | — (static, no backend) |
| `weightStore` | `onfit-weights` | `weight_records` |
| `bodyWeightStore` | `onfit-body-weights` | `body_weights` |

All weight stores have `_synced` flag per record, auto-sync on init, and listen for `online` events to push pending writes.

## Supabase migrations

```sql
-- 001_weight_records.sql: id UUID PK, user_id, exercise_name, date, sets JSONB, notes
-- 002_body_weights.sql:  composite PK (user_id, date), weight NUMERIC(5,1)
```

Run via `node scripts/migrate.mjs` (hardcoded connection string in that file).

## Static login (no backend)

| User | Password | Display |
|---|---|---|
| `plugo` | `refactor-me` | Pablo |
| `yamylaj` | `refactor-me` | Yamila |

`AuthGuard.tsx` wraps all pages with `client:load`.

## 4-day rotation

| Day | Color | Groups |
|---|---|---|
| Dia 1 | `#00bcd4` | Piernas delante + Hombros + Core |
| Dia 2 | `#7c3aed` | Pecho + Triceps (Empuje) + Core |
| Dia 3 | `#eab308` | Piernas atras + Hombros + Core |
| Dia 4 | `#f97316` | Espalda + Biceps (Traccion) + Core |

Static routes: `/dias/dia-1` through `/dias/dia-4`.

## Workflow

- **Branch per task**: Always create a new branch before starting work. Name it `tipo/descripcion-corta` (e.g. `feat/simplified-day-view`, `fix/weight-logger-bug`).
- **Commit por todo**: After completing each subtask/todo item, make an individual commit with a descriptive message in Spanish or English.
- **Pull Request**: After all commits are done, push and create a PR.

## Conventions

- **Language**: UI/data in Spanish, code names in English. Exercise `nameEs` MUST include original gym card name in parens, e.g. `"Press de pecho en maquina (CHEST PRESS)"`.
- **Components**: `.astro` for pages/layouts/static, `.tsx` for interactive (always `'use client'`). Load interactive islands with `client:load`.
- **Styles**: Tailwind utilities only. `cn()` from `src/lib/utils.ts` for conditional classes.
- **Icons**: `lucide-react`, individual imports.
- **Exercise data**: `src/data/training/*.ts` → barrel via `training/index.ts` → `training-plan.ts`.
- **Astro strict tsconfig**, React 19 with `react-jsx`.

## Available agent skills

Locked in `skills-lock.json`: accessibility, astro, composition-patterns, deploy-to-vercel, frontend-design, nodejs-backend-patterns, nodejs-best-practices, react-best-practices, seo, supabase, supabase-postgres-best-practices, tailwind-css-patterns, typescript-advanced-types.
