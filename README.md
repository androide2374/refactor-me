# OnFit Adaptacion App

Aplicacion web en Astro para consultar un plan de entrenamiento inicial enfocado en adaptacion anatomica, recomposicion corporal y creacion de habito.

## Stack

- Astro 6
- React 19 para islas interactivas
- Tailwind CSS 4
- Componentes estilo shadcn/ui
- Recharts para visualizacion de datos
- Adapter oficial de Vercel

## Objetivo de esta version

- Mostrar que hacer en cada sesion de 60 minutos
- Explicar ejercicios, bloques y prioridades tecnicas
- Visualizar volumen, progresion y habitos base
- Preparar el terreno para una futura carga de logs con RPE, energia y sueno

## Comandos

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Despliegue en Vercel

El proyecto ya incluye el adapter oficial de Astro para Vercel. Conecta el repositorio en Vercel y usa la configuracion detectada por defecto.

## Estructura relevante

```text
src/
	components/
		charts/
		ui/
	data/
	layouts/
	lib/
	pages/
	styles/
```
