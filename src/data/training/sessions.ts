import type { Exercise } from './exercises';

export interface TrainingDay {
    id: string;
    slug: string;
    day: string;
    label: string;
    colorName: string;
    colorHex: string;
    title: string;
    focus: string;
    note: string;
    exerciseOrder: string[];
    warmup: string[];
}

export const trainingDays: TrainingDay[] = [
    {
        id: 'day-1',
        slug: 'dia-1',
        day: 'Dia 1',
        label: 'Dia 1',
        colorName: 'Cian',
        colorHex: '#00bcd4',
        title: 'Piernas delante y Hombros',
        focus: 'Cuadriceps, gemelos y deltoides con ejercicios guiados para ganar fuerza y estabilidad.',
        note: 'Prioriza rango completo en prensa y control en vuelos laterales. No bloquees rodillas.',
        exerciseOrder: [
            'Shoulder Press', 'Rear Delt Fly',
            'Leg Press 45', 'Leg Extension', 'Calf Raise', 'Sissy Squat', 'Smith Squat',
            'Plank', 'Heel Touch', 'Side Plank'
        ],
        warmup: [
            'Cardio general: 10 min de bici, cinta o eliptica a ritmo conversacional (RPE 3-4).',
            'Circulos de brazos hacia adelante y atras (30s cada direccion).',
            'Rotaciones de cadera abriendo y cerrando (1 min).',
            'Sentadillas sin peso (bodyweight) 2x10 — activa cuadriceps y gluteos.',
            'Zancadas alternas sin peso 2x8 por pierna — activa cadera y rodillas.',
            'Movilidad de tobillo: circulos en ambos sentidos 30s por pie.'
        ]
    },
    {
        id: 'day-2',
        slug: 'dia-2',
        day: 'Dia 2',
        label: 'Dia 2',
        colorName: 'Morado',
        colorHex: '#7c3aed',
        title: 'Pecho y Triceps (Empuje)',
        focus: 'Pectoral mayor y triceps con patrones de empuje en maquina guiada y peso libre.',
        note: 'Manten escapulas fijas en todos los presses. Controla la fase negativa en 2 segundos.',
        exerciseOrder: [
            'Chest Press', 'Pec Fly', 'Incline DB Press', 'Incline DB Fly',
            'Triceps Bar Pushdown', 'French Press', 'Triceps Rope Pushdown',
            'Crunch', 'Russian Twist'
        ],
        warmup: [
            'Cardio general: 10 min de bici, cinta o eliptica a ritmo conversacional (RPE 3-4).',
            'Circulos de brazos hacia adelante y atras (30s cada direccion).',
            'Escapulares pushups (apoyo de rodillas) 2x10 — activa serrato y estabilizadores.',
            'Band pull-aparts o aperturas con banda elastica 2x12 — activa romboides y deltoide posterior.',
            'Rotaciones de torso con palo o sin peso (1 min).',
            'Aperturas ligeras sin peso 2x10 — patron de pec fly sin carga.'
        ]
    },
    {
        id: 'day-3',
        slug: 'dia-3',
        day: 'Dia 3',
        label: 'Dia 3',
        colorName: 'Amarillo',
        colorHex: '#eab308',
        title: 'Piernas atras y Hombros',
        focus: 'Isquiotibiales, gluteos y deltoides para equilibrar la cadena posterior.',
        note: 'Cadera estable en femoral y control de hombro en press militar.',
        exerciseOrder: [
            'Military Press', 'Cable Front Raise',
            'Leg Curl', 'Adductor Machine', 'Abductor Machine', 'Multi Hip', 'Hip Thrust Machine',
            'Back Extension', 'Bench Crunch'
        ],
        warmup: [
            'Cardio general: 10 min de bici, cinta o eliptica a ritmo conversacional (RPE 3-4).',
            'Circulos de brazos hacia adelante y atras (30s cada direccion).',
            'Rotaciones de cadera abriendo y cerrando (1 min).',
            'Puentes de gluteo 2x12 — activa gluteo mayor e isquiotibiales.',
            'Balanceo de piernas adelante/atras 1 min por pierna — movilidad de cadera.',
            'Good mornings sin peso 2x10 — activa cadena posterior.'
        ]
    },
    {
        id: 'day-4',
        slug: 'dia-4',
        day: 'Dia 4',
        label: 'Dia 4',
        colorName: 'Naranja',
        colorHex: '#f97316',
        title: 'Espalda y Biceps (Traccion)',
        focus: 'Dorsales, trapecio y biceps con patrones de tiron en poleas y maquinas.',
        note: 'Tira con codos, no con lumbar. Apreta escapulas al final y controla el retorno.',
        exerciseOrder: [
            'Vertical Traction', 'Low Row', 'Lat Bar Pronated', 'Lat Triangle',
            'DB Pullover', 'Barbell Shrug',
            'Hammer Curl', 'Curl 21', 'Scott Curl',
            'Oblique Leg Raise', 'Superman'
        ],
        warmup: [
            'Cardio general: 10 min de bici, cinta o eliptica a ritmo conversacional (RPE 3-4).',
            'Circulos de brazos hacia adelante y atras (30s cada direccion).',
            'Escapular pull en polea liviana 2x12 — activa dorsales sin fatigar.',
            'Rotaciones toracicas con palo o sin peso (1 min) — movilidad de columna.',
            'Jalon recto con polea liviana 2x12 — patron de tiron sin carga.',
            'Movilidad de muneca y antebrazo: circulos y estiramientos (1 min).'
        ]
    }
];

export const getExercisesForDay = (dayOrder: string[], exercises: Exercise[]) =>
    dayOrder
        .map((name) => exercises.find((e) => e.name === name))
        .filter((e): e is Exercise => Boolean(e));
