# AGENTS.md — OnFit Focus

Instrucciones operativas para agentes que trabajen en este proyecto.

---

## Proyecto

Aplicacion web local (Astro 6 + React 19) con un plan de entrenamiento visual de **4 dias en rotacion secuencial** (sin dias fijos de semana). Incluye registro de pesos por ejercicio, graficos de progresion, y autenticacion estatica para 2 usuarios. Se consulta 100% del lado cliente, los datos se persisten en localStorage.

- **Nombre:** OnFit Focus (`onfit-adaptacion-app`)
- **Version:** 0.0.1
- **Idioma:** espanol (UI y datos), ingles (nombres de codigo, variables)
- **Package manager:** pnpm
- **Runtime:** Node >= 22.12.0
- **Uso:** solo local, no se despliega

---

## Stack tecnologico

| Capa | Tecnologia |
|---|---|
| Framework | Astro 6 (SSG con islands) |
| UI interactiva | React 19 (islands cliente) |
| Estado global | Zustand 5 + middleware `persist` (localStorage) |
| Estilos | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Componentes base | shadcn/ui-style (`class-variance-authority`, Radix UI) |
| Graficos | Recharts 3.8 (Line, Bar, Radar) |
| Iconos | Lucide React 0.577 |
| Tipografia | Outfit Variable (sans), Fira Code Variable (mono) |
| PWA | `@vite-pwa/astro` |
| Adapter | Vercel (`@astrojs/vercel`) |
| TypeScript | 5.9, strict (`astro/tsconfigs/strict`) |

---

## Comandos

| Comando | Descripcion |
|---|---|
| `pnpm dev` | Servidor de desarrollo Astro |
| `pnpm build` | Build de produccion |
| `pnpm check` | Type-checking con `astro check` |
| `pnpm preview` | Previsualizar build local |

---

## Estructura del proyecto

```text
src/
  assets/                  # SVGs estaticos (icono, fondo)
  components/
    charts/
      SessionCharts.tsx    # Graficos Recharts (distribucion, tendencia, radar)
    ui/                    # Primitivos shadcn/ui (badge, card, progress, tabs)
    AppHeader.astro        # Header comun (logo + UserSwitcher + ThemeSwitcher)
    AuthGuard.tsx          # Pantalla de login (se muestra si no hay sesion)
    ExerciseTabs.tsx       # Tabs: Sesiones / Ejercicios / Reglas
    GymIllustration.astro  # SVG inline de gimnasio
    ThemeSwitcher.tsx      # Toggle light/dark theme
    TrainingDaysGrid.tsx   # Grid de 4 cards con los dias de rotacion
    UserSwitcher.tsx       # Cambio entre usuarios (Pablo / Yamila)
    WeightChart.tsx        # Grafico de progresion de pesos (linea)
    WeightLogger.tsx       # Registro de pesos por serie + historial
  data/
    training/
      charts.ts            # Datos para graficos (distribucion, tendencia, radar)
      exercises.ts         # 39 ejercicios con metadatos completos
      habits.ts            # Guias de habitos + reglas de progresion
      index.ts             # Barrel re-export
      profiles.ts          # Perfiles de atleta y pareja
      sessions.ts          # 4 dias de entrenamiento + warmups + helper
    training-plan.ts       # Barrel export a nivel src/data/
  layouts/
    Layout.astro           # Shell HTML: <head>, metas, fuentes, tema
  lib/
    utils.ts               # cn() = clsx + tailwind-merge
  pages/
    dias/[slug].astro      # Pagina de cada dia (static paths: dia-1 a dia-4)
    perfiles/pareja.astro  # Placeholder perfil pareja (sin plan aun)
    index.astro            # Homepage con los 4 dias, stats y graficos
  stores/
    authStore.ts           # Zustand: login estatico + persistencia
    weightStore.ts         # Zustand: pesos por serie + userId + persistencia
  styles/
    global.css             # Tailwind v4, custom properties, temas light/dark
public/
  exercises/               # SVGs fallback de ejercicios
  *.png, *.svg             # Assets estaticos (favicon, PWA icons)
```

---

## Sistema de login

Login estatico para 2 usuarios. No hay backend. Se persiste en localStorage.

| Usuario | Password | Display |
|---|---|---|
| `plugo` | `refactor-me` | Pablo |
| `yamylaj` | `refactor-me` | Yamila |

- `AuthGuard.tsx` muestra pantalla de login si no hay sesion activa.
- `UserSwitcher.tsx` permite cambiar de usuario en caliente desde el header.
- `authStore.ts` maneja el estado con Zustand + persist.
- Todas las paginas estan wrappeadas en `<AuthGuard client:load>`.

---

## Plan de entrenamiento

### Rotacion de 4 dias

Sin dias fijos. Si faltas, retomas donde estabas. Orden secuencial:

| Dia | Color | Grupo |
|---|---|---|
| Dia 1 | Cian `#00bcd4` | Piernas delante + Hombros + Core |
| Dia 2 | Morado `#7c3aed` | Pecho + Triceps (Empuje) + Core |
| Dia 3 | Amarillo `#eab308` | Piernas atras + Hombros + Core |
| Dia 4 | Naranja `#f97316` | Espalda + Biceps (Traccion) + Core |

**Total: 39 ejercicios** (30 principales + 9 de core).

### Estructura de cada dia

1. **Cardio entrada:** 10 min (bici, cinta o eliptica)
2. **Calentamiento especifico:** 5-6 pasos por grupo muscular
3. **Ejercicios del dia:** listados en `exerciseOrder`
4. **Cardio salida:** 15 min suave

Los calentamientos estan en `sessions.ts` como array `warmup: string[]`.

### Formato de ejercicio (`exercises.ts`)

```typescript
interface Exercise {
  name: string;           // Code name (ingles, usado en exerciseOrder)
  nameEs: string;         // Display (espanol + nombre original de tarjeta entre parentesis)
  muscleGroup: string;    // Grupo muscular
  sets: number;           // Series
  reps: number;           // Repeticiones (1 = ejercicio cronometrado)
  description: string;    // Como hacerlo
  cues: string[];         // Puntos clave de tecnica
  commonMistakes: string[];  // Errores frecuentes
  imageUrl: string;       // Thumbnail de YouTube
  imageFallbackUrl: string;  // SVG local si falla la imagen
  videoUrl: string;       // YouTube search link
  restSeconds: number;    // Descanso entre series
  dayId: string;          // 'day-1' a 'day-4'
}
```

**IMPORTANTE:** El campo `nameEs` debe incluir el nombre original de la tarjeta del gym entre parentesis. Ej: `"Press de pecho en maquina (CHEST PRESS)"`. Esto evita confusiones al buscar el ejercicio en el gimnasio.

---

## Sistema de pesos

### Modelo de datos (`weightStore.ts`)

Cada registro guarda peso **por serie**, etiquetado por usuario:

```typescript
interface SetEntry {
  setNumber: number;
  weight: number;  // kg
  reps: number;
}

interface WeightRecord {
  id: string;
  userId: string;         // 'plugo' | 'yamylaj'
  date: string;           // YYYY-MM-DD
  exerciseName: string;   // FK a Exercise.name
  sets: SetEntry[];       // Un entry por serie (ej: 4 entries para 4x10)
  notes: string;
}
```

Persistido en localStorage via Zustand `persist('onfit-weights')`.

### Componentes

- **`WeightLogger.tsx`**: Input por serie + historial de ultimos registros + boton "Progresion"
- **`WeightChart.tsx`**: Modal con LineChart mostrando maximo y promedio por sesion + tabla de datos

### Funciones helper (`weightStore.ts`)

- `getMaxWeight(record)` — peso maximo de la sesion
- `getAvgWeight(record)` — peso promedio de la sesion

---

## Convenciones de codigo

### Astro vs React

- **`.astro`**: Paginas, layouts, componentes estaticos. Logica en frontmatter (`---`).
- **`.tsx`**: Solo componentes interactivos. Siempre arrancan con `'use client';`. Se cargan con `client:load` o `client:only="react"`.

### Estilos

- Tailwind utility-first. No se crean archivos `.css` por componente.
- 2 temas: `onfit-light` y `vscode-dark` (custom properties en `global.css`).
- `cn()` (`src/lib/utils.ts`) = clsx + tailwind-merge para clases condicionales.
- Radios grandes: `rounded-[1.5rem]`, `rounded-[2rem]`.

### Iconos

- Todos de `lucide-react`, importados individualmente.
- Tamanos: `h-4 w-4` (estandar), `h-3.5 w-3.5` (compacto), `h-5 w-5` (destacado).

### Datos

- Todo estatico en `src/data/training/`. Sin API externa.
- Barrel export: `training/index.ts` → `training-plan.ts`.
- Los graficos leen datos de `charts.ts`.

### Stores (Zustand)

- `authStore.ts`: `create<T>()(persist(...))` con nombre `onfit-auth`.
- `weightStore.ts`: `create<T>()(persist(...))` con nombre `onfit-weights`.
- No se mezclan stores. Cada store es independiente.

### Nombres

- Variables/funciones: ingles (`trainingDays`, `getExercisesForDay`).
- UI y datos: espanol (`nameEs`, descripciones).
- Rutas: espanol (`/dias/dia-1`).
- IDs de ejercicios: ingles (`Chest Press`, `Leg Extension`). Son los que van en `exerciseOrder`.

---

## Arquitectura y flujo de datos

```text
src/data/training/*.ts          (datos estaticos)
        │
        ▼
src/data/training-plan.ts       (barrel re-export)
        │
        ├──▶ src/pages/*.astro   (importan datos en frontmatter)
        │       │
        │       ├── AuthGuard.tsx        (login si no hay sesion)
        │       ├── AppHeader.astro      (logo + UserSwitcher + ThemeSwitcher)
        │       ├── TrainingDaysGrid.tsx  (4 dias)
        │       ├── ExerciseTabs.tsx      (sesiones/ejercicios/reglas)
        │       ├── SessionCharts.tsx     (graficos)
        │       ├── WeightLogger.tsx      (registro de pesos)
        │       └── WeightChart.tsx       (progresion)
        │
        └── src/stores/*.ts     (estado global Zustand)
                ├── authStore.ts     → localStorage('onfit-auth')
                │     ├── user, isAuthenticated
                │     ├── login(), logout(), switchUser()
                │     └── USERS: { plugo, yamylaj }
                │
                └── weightStore.ts   → localStorage('onfit-weights')
                      ├── records[]
                      ├── addRecord(), getRecords(), deleteRecord()
                      └── getMaxWeight(), getAvgWeight()
```

- **Tema:** `ThemeSwitcher.tsx` lee/escribe `localStorage('onfit-theme')`.
- **Auth:** `AuthGuard.tsx` bloquea contenido hasta login. `UserSwitcher.tsx` cambia usuario activo. Ambos usan `authStore`.
- **Pesos:** `WeightLogger.tsx` y `WeightChart.tsx` leen/escriben via `weightStore`, filtrando por `userId` activo.

---

## Reglas para agentes

### Al modificar codigo

1. **NUNCA** modificar archivos sin leerlos primero.
2. **NUNCA** asumir que una libreria esta disponible si no aparece en `package.json`.
3. **NUNCA** agregar comentarios a menos que se pida explicitamente.
4. **NUNCA** crear archivos `.md` de documentacion sin que el usuario lo pida.
5. **NUNCA** hacer commit sin que el usuario lo pida explicitamente.
6. **SIEMPRE** correr `pnpm check && pnpm build` despues de cambios.
7. **SIEMPRE** seguir las convenciones de Astro/React/Zustand descritas arriba.
8. **SIEMPRE** usar Tailwind para estilos. No crear archivos CSS nuevos.
9. **ANTES** de escribir codigo, revisar componentes existentes para mantener consistencia.
10. **RESPETAR** el idioma: UI y datos en espanol, nombres de codigo en ingles.
11. **AL AGREGAR** ejercicios, incluir el nombre original de la tarjeta del gym entre parentesis en `nameEs`.
12. **AL MODIFICAR** datos de ejercicios, mantener la interfaz `Exercise` sin cambios que rompan paginas existentes.

### Al gestionar tareas

Seguir el workflow descrito en la seccion [Harness de Tareas](#harness-de-tareas).

---

## Harness de Tareas

Las tareas se gestionan en `docs/tasks/` con tres archivos que representan estados:

```
docs/tasks/
  pendientes.md     # Tareas sin iniciar
  en-progreso.md    # Tareas siendo trabajadas
  completadas.md    # Tareas finalizadas
```

### Formato de tarea

```markdown
## TASK-NNN · Titulo de la tarea

| Campo | Valor |
|---|---|
| **Descripcion** | Que hay que hacer, en detalle |
| **Prioridad** | alta / media / baja |
| **Creada** | YYYY-MM-DD |
| **Limite** | YYYY-MM-DD (o — si no tiene) |
| **Asignado a** | Nombre del agente (o — si esta libre) |
| **Etiquetas** | feature, bug, refactor, docs, ... |
| **Dependencias** | TASK-NNN (o — si no tiene) |

### Detalle

Descripcion extensa.

### Notas

- Notas adicionales.
```

### Identidad del agente

El agente se identifica usando:

```bash
git config user.name
```

### Transiciones de estado

```text
PENDIENTE ──(tomar)──▶ EN PROGRESO
                           │
              (completar) ◄┘
                           │
              (cancelar) ──▶ PENDIENTE
```

| Transicion | Accion |
|---|---|
| **Tomar** | Mover de `pendientes.md` a `en-progreso.md`. Completar **Asignado a** con `git config user.name`. |
| **Completar** | Mover de `en-progreso.md` a `completadas.md`. Agregar campo **Completada** con fecha. |
| **Cancelar** | Mover de `en-progreso.md` a `pendientes.md`. Borrar **Asignado a** (dejar `—`). |

### Reglas adicionales

- Maximo 1 tarea en progreso por agente.
- Una tarea con dependencias sin completar no puede moverse a en-progreso.
- IDs secuenciales globales (`TASK-001`, `TASK-002`, ...). Buscar el maximo entre los 3 archivos.
- Las tareas completadas nunca se borran.
- Etiquetas en ingles: `feature`, `bug`, `refactor`, `docs`, `style`, `test`, `chore`.

### Antes de empezar

1. Leer `.agents/AGENTS.md`.
2. Revisar `docs/tasks/pendientes.md`.
3. Si se crea tarea nueva → `pendientes.md` con ID secuencial.
4. Si se toma tarea → mover a `en-progreso.md` siguiendo la transicion.
5. Al terminar → transicion a `completadas.md`.
