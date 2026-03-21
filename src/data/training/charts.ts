import { sessionBlocks } from './sessions';

export const sessionDistributionChart = sessionBlocks.map((block, index) => ({
    name: block.id,
    label: block.name,
    minutes: block.duration,
    fill: ['#165d48', '#4f8f7a', '#f08b4b', '#e6b96b', '#284d3a'][index]
}));

export const adaptationTrendChart = [
    { week: 'Semana 1', tecnica: 88, carga: 38, tolerancia: 52 },
    { week: 'Semana 2', tecnica: 86, carga: 44, tolerancia: 60 },
    { week: 'Semana 3', tecnica: 84, carga: 49, tolerancia: 69 },
    { week: 'Semana 4', tecnica: 82, carga: 55, tolerancia: 78 }
];

export const learningRadarChart = [
    { metric: 'Hidratacion', value: 94 },
    { metric: 'Tecnica', value: 88 },
    { metric: 'Postura', value: 84 },
    { metric: 'Recuperacion', value: 72 },
    { metric: 'Adherencia', value: 91 }
];
