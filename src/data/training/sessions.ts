export const sessionBlocks = [
    {
        id: 'A',
        name: 'Activacion general',
        duration: 10,
        intensity: 'RPE 4-5',
        focus: 'Subir temperatura y preparar articulaciones antes del primer ejercicio con carga.',
        prescription: '10 minutos de aerobico suave (bici o cinta) + movilidad corta de hombro, cadera y tobillo.',
        checkpoints: [
            'Entrar en calor sin jadeo durante 8 a 10 minutos',
            'No arrancar series pesadas en frio',
            'Chequea rango sin dolor antes de subir carga'
        ]
    },
    {
        id: 'B',
        name: 'Bloque principal',
        duration: 45,
        intensity: 'RPE 6-7',
        focus: 'Ejercicios compuestos del dia para generar el mayor estimulo tecnico y mecanico.',
        prescription: 'Primeros 2 o 3 ejercicios del dia con descansos de 75 a 90 segundos.',
        checkpoints: [
            'Prioriza tecnica sobre carga absoluta',
            'Respira y recupera entre series',
            'Controla la fase negativa en 2 segundos'
        ]
    },
    {
        id: 'C',
        name: 'Salida aerobica',
        duration: 15,
        intensity: 'RPE 3-4',
        focus: 'Bajar pulsaciones con cardio suave y cerrar la sesion sin corte brusco.',
        prescription: '15 minutos de aerobico suave en cinta, bici o eliptica.',
        checkpoints: [
            'Ritmo conversacional durante toda la salida',
            'No convertir el cierre en HIIT',
            'Cierra con respiracion y baja pulsaciones'
        ]
    }
];

export const trainingDays = [
    {
        id: 'day-1',
        slug: 'dia-1-rojo',
        day: 'Lunes',
        label: 'Dia 1',
        colorName: 'Rojo',
        colorHex: '#e3574f',
        planLabel: 'Dia 1 (Rojo)',
        title: 'Pecho, espalda, triceps y cuadriceps',
        focus: 'Empuje y tiron base con cierre de triceps y cuadriceps guiado.',
        note: 'Orden sugerido: Chest Press, Pec Fly, Low Row, Triceps soga y Leg Extension.',
        blocks: [
            {
                id: 'A',
                name: 'Activacion',
                duration: 10,
                intensity: 'RPE 4-5',
                prescription: '10 minutos de aerobico suave (cinta o bici) + movilidad de hombro y torax.'
            },
            {
                id: 'B',
                name: 'Pecho y espalda',
                duration: 28,
                intensity: 'RPE 6-7',
                prescription: 'Chest Press, Pec Fly y Low Row con tempo controlado.'
            },
            {
                id: 'C',
                name: 'Triceps y cuadriceps',
                duration: 17,
                intensity: 'RPE 7',
                prescription: 'Triceps en soga y Leg Extension sin rebotes.'
            },
            {
                id: 'D',
                name: 'Salida',
                duration: 15,
                intensity: 'RPE 3-4',
                prescription: '15 minutos de aerobico suave + respiracion e hidratacion final.'
            }
        ],
        exerciseOrder: ['Chest Press', 'Pec Fly', 'Low Row', 'Triceps Rope Pushdown', 'Leg Extension']
    },
    {
        id: 'day-2',
        slug: 'dia-2-amarillo',
        day: 'Miercoles',
        label: 'Dia 2',
        colorName: 'Amarillo',
        colorHex: '#d2b33f',
        planLabel: 'Dia 2 (Amarillo)',
        title: 'Espalda, biceps, femorales y gluteos',
        focus: 'Tiron dominante con trabajo posterior para equilibrar cadena posterior.',
        note: 'Manten el control en poleas y pausa de 1 segundo en hip thrust.',
        blocks: [
            {
                id: 'A',
                name: 'Activacion',
                duration: 10,
                intensity: 'RPE 4-5',
                prescription: '10 minutos de aerobico suave + movilidad de escpula y cadera.'
            },
            {
                id: 'B',
                name: 'Espalda y biceps',
                duration: 27,
                intensity: 'RPE 6-7',
                prescription: 'Vertical Trac, Lat con triangulo y biceps.'
            },
            {
                id: 'C',
                name: 'Femoral y gluteo',
                duration: 18,
                intensity: 'RPE 7',
                prescription: 'Leg Curl y Hip Thrust en control total.'
            },
            {
                id: 'D',
                name: 'Salida',
                duration: 15,
                intensity: 'RPE 3-4',
                prescription: '15 minutos de aerobico suave y respiracion para cierre de sesion.'
            }
        ],
        exerciseOrder: ['Vertical Traction', 'Lat Triangle Row', 'Leg Curl', 'Hip Thrust']
    },
    {
        id: 'day-3',
        slug: 'dia-3-azul',
        day: 'Viernes',
        label: 'Dia 3',
        colorName: 'Azul',
        colorHex: '#4f8db8',
        planLabel: 'Dia 3 (Azul)',
        title: 'Hombros, brazos y aductores/abductores',
        focus: 'Dia tecnico de hombros y brazos con accesorios de cadera.',
        note: 'Rango limpio en deltoides y poleas, sin impulso del tronco.',
        blocks: [
            {
                id: 'A',
                name: 'Activacion',
                duration: 10,
                intensity: 'RPE 4-5',
                prescription: '10 minutos de aerobico suave + movilidad de hombro y 2 series de aproximacion.'
            },
            {
                id: 'B',
                name: 'Hombros',
                duration: 22,
                intensity: 'RPE 6-7',
                prescription: 'Press militar y vuelo lateral con tecnica fina.'
            },
            {
                id: 'C',
                name: 'Brazos y cadera',
                duration: 23,
                intensity: 'RPE 7-8',
                prescription: 'Curl alternado, triceps barra, aductores y abductores.'
            },
            {
                id: 'D',
                name: 'Salida',
                duration: 15,
                intensity: 'RPE 3-4',
                prescription: '15 minutos de aerobico suave para bajar pulsaciones e hidratarte.'
            }
        ],
        exerciseOrder: ['Military Press', 'Lateral Raise', 'Alternating Curl', 'Triceps Bar Pushdown', 'Adductor and Abductor Machine']
    }
];

export const weeklySchedule = trainingDays.map((dayPlan) => ({
    day: dayPlan.day,
    label: `${dayPlan.label} · ${dayPlan.colorName}`,
    focus: dayPlan.title,
    note: dayPlan.note,
    href: `/dias/${dayPlan.slug}`,
    colorHex: dayPlan.colorHex,
    planLabel: dayPlan.planLabel
}));

export const getDayTotalMinutes = (dayPlan: { blocks: Array<{ duration: number }> }) =>
    dayPlan.blocks.reduce((accumulator, block) => accumulator + block.duration, 0);
