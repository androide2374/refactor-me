export const athleteProfile = {
	id: 'yo',
	label: 'Mi plan',
	personName: 'Perfil principal',
	age: 28,
	heightCm: 170,
	weightKg: 125,
	trainingDays: 3,
	sessionMinutes: 60,
	preferredTime: '08:30',
	gym: 'OnFit San Vicente',
	medication: 'Semaglutida',
	planReady: true
};

export const partnerProfile = {
	id: 'pareja',
	label: 'Plan pareja',
	personName: 'Perfil pareja',
	age: 30,
	heightCm: 155,
	weightKg: 98,
	gym: 'Pendiente de confirmar',
	trainingDays: 0,
	sessionMinutes: 0,
	preferredTime: 'Pendiente',
	medication: 'Pendiente',
	planReady: false,
	nextStep:
		'Falta completar energia, sueno, experiencia de entrenamiento, historial de molestias y disponibilidad semanal para construir su plan.'
};

export const availableProfiles = [
	{ id: athleteProfile.id, label: athleteProfile.label, href: '/', planReady: athleteProfile.planReady },
	{ id: partnerProfile.id, label: partnerProfile.label, href: '/perfiles/pareja', planReady: partnerProfile.planReady }
];

export const bmiReference = (athleteProfile.weightKg / (athleteProfile.heightCm / 100) ** 2).toFixed(1);

export const sessionBlocks = [
	{
		id: 'A',
		name: 'Calentamiento dinamico',
		duration: 15,
		intensity: 'RPE 4-5',
		focus: 'Elevar temperatura, preparar tobillo, rodilla, cadera y hombro antes de mover carga.',
		prescription: 'Cinta con 2% de inclinacion y ritmo moderado. Busca respiracion estable y zancada corta, no velocidad.',
		checkpoints: [
			'Primeros 5 minutos para entrar en calor sin jadeo',
			'Mantene hombros relajados y mirada al frente',
			'Si la respiracion se acelera de golpe, baja ritmo un punto'
		]
	},
	{
		id: 'B',
		name: 'Tren superior postural',
		duration: 15,
		intensity: 'RPE 6-7',
		focus: 'Reforzar dorsales, pectoral y posicion escapular para contrarrestar la postura de escritorio.',
		prescription: 'Lat Pulldown 3x12 y Chest Press 3x12. Controla el final de cada repeticion y evita tirones.',
		checkpoints: [
			'Escapulas estables antes de iniciar cada repeticion',
			'Si perdes tecnica en las ultimas reps, baja carga',
			'Mantene descansos de 60-75 segundos'
		]
	},
	{
		id: 'C',
		name: 'Tren inferior',
		duration: 12,
		intensity: 'RPE 6-7',
		focus: 'Sumar trabajo de piernas con apoyo guiado y enfasis en fase excentrica.',
		prescription: 'Leg Press 3x15 con descenso lento de 2-3 segundos. No bloquees rodillas al extender.',
		checkpoints: [
			'Talones apoyados todo el recorrido',
			'Bajada controlada de 2-3 segundos',
			'Rodillas alineadas con la punta de los pies'
		]
	},
	{
		id: 'D',
		name: 'Core y estabilidad',
		duration: 8,
		intensity: 'RPE 5-6',
		focus: 'Crear rigidez abdominal para mejorar transferencia y proteger la zona lumbar.',
		prescription: 'Plancha abdominal 3 x 20-30 segundos. Mantene costillas abajo y gluteos apretados.',
		checkpoints: [
			'Costillas abajo y pelvis neutra',
			'No dejes caer la zona lumbar',
			'Corta la serie antes de perder alineacion'
		]
	},
	{
		id: 'E',
		name: 'Vuelta a la calma',
		duration: 10,
		intensity: 'RPE 3-4',
		focus: 'Bajar pulsaciones, sostener movilidad y salir sin sensacion de choque.',
		prescription: 'Eliptica o bicicleta fija a baja intensidad. El objetivo es recuperar, no sumar castigo.',
		checkpoints: [
			'Ritmo facil y respiracion por nariz cuando sea posible',
			'Hidratarse al finalizar este bloque',
			'No cerrar la sesion con sensacion de agotamiento'
		]
	}
];

export const weeklySchedule = [
	{
		day: 'Lunes',
		label: 'Sesion A',
		focus: 'Tecnica y tolerancia de rango',
		note: 'Usa una carga que permita terminar cada serie con 3 o 4 repeticiones en reserva.'
	},
	{
		day: 'Miercoles',
		label: 'Sesion B',
		focus: 'Control excentrico y postura',
		note: 'Mantene el descenso un poco mas lento en polea y prensa para aprender a frenar la carga.'
	},
	{
		day: 'Viernes',
		label: 'Sesion C',
		focus: 'Consolidacion y lectura de RPE',
		note: 'Si dos sesiones seguidas quedan por debajo de RPE 7, recien ahi evaluas subir entre 5% y 10%.'
	}
];

export const exercises = [
	{
		name: 'Lat Pulldown',
		nameEsAr: 'Jalon al pecho en polea',
		searchAliasesEsAr: ['Jalon al pecho', 'Polea al pecho', 'Dorsalera'],
		block: 'Bloque B',
		machine: 'Polea al pecho en maquina guiada',
		sets: 3,
		reps: 12,
		restSeconds: 75,
		why: 'Refuerza dorsales y ayuda a abrir el torax, algo clave para compensar muchas horas sentado.',
		beginnerTip: 'Pensa en bajar los codos hacia los bolsillos. Si el cuello se tensa, el peso es demasiado alto.',
		cues: ['Pecho arriba', 'Barra al pecho alto', 'No balancear el torso'],
		riskNote: 'Evita hiperextender la espalda para terminar la repeticion.',
		learningLoad: 58,
		imageUrl: 'https://i.ytimg.com/vi/CAwf7n6Luuc/hqdefault.jpg',
		imageFallbackUrl: '/exercises/lat-pulldown.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=lat+pulldown+machine+tutorial',
		howTo: [
			'Ajusta el apoyo de piernas para que los muslos queden fijos.',
			'Inicia con pecho alto y hombros lejos de las orejas.',
			'Baja la barra al pecho alto guiando con codos.',
			'Sube la barra en control sin soltar tension.'
		],
		commonMistakes: ['Inclinar demasiado el torso hacia atras', 'Tirar con biceps y encoger hombros', 'Rebotar la barra en cada repeticion']
	},
	{
		name: 'Chest Press',
		nameEsAr: 'Press de pecho en maquina',
		searchAliasesEsAr: ['Press de pecho', 'Pecho en maquina', 'Press horizontal'],
		block: 'Bloque B',
		machine: 'Maquina de pecho con respaldo',
		sets: 3,
		reps: 12,
		restSeconds: 75,
		why: 'Construye fuerza de empuje sin exigir estabilidad avanzada y ayuda a coordinar hombro y escpula.',
		beginnerTip: 'Manten hombros abajo y atras. Si el hombro se adelanta al final, recorta carga.',
		cues: ['Pies firmes', 'Munecas neutras', 'Controla el regreso'],
		riskNote: 'No rebotes ni empujes con la cabeza despegandose del respaldo.',
		learningLoad: 55,
		imageUrl: 'https://i.ytimg.com/vi/sqNwDkUU_Ps/hqdefault.jpg',
		imageFallbackUrl: '/exercises/chest-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=chest+press+machine+form',
		howTo: [
			'Ajusta el asiento para que las manijas queden a mitad del pecho.',
			'Apoya espalda y pies firmes antes de empujar.',
			'Empuja en linea recta sin bloquear codos al final.',
			'Regresa lento manteniendo control del hombro.'
		],
		commonMistakes: ['Abrir codos en exceso', 'Despegar la espalda del respaldo', 'Bajar demasiado rapido en la fase de retorno']
	},
	{
		name: 'Leg Press',
		nameEsAr: 'Prensa de piernas',
		searchAliasesEsAr: ['Prensa 45', 'Prensa horizontal', 'Leg press'],
		block: 'Bloque C',
		machine: 'Prensa inclinada o horizontal',
		sets: 3,
		reps: 15,
		restSeconds: 90,
		why: 'Permite entrenar piernas con apoyo externo, bajar carga tecnica y sumar gasto energetico grande.',
		beginnerTip: 'Baja hasta donde puedas mantener talones apoyados y zona lumbar estable.',
		cues: ['Rodillas siguen la punta del pie', 'Talones pegados', 'Bajada lenta'],
		riskNote: 'No bloquees completamente las rodillas en la extension.',
		learningLoad: 64,
		imageUrl: 'https://i.ytimg.com/vi/IZxyjW7MPJQ/hqdefault.jpg',
		imageFallbackUrl: '/exercises/leg-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=leg+press+machine+proper+form',
		howTo: [
			'Ubica pies al ancho de hombros en la plataforma.',
			'Desbloquea seguro y baja con control de 2-3 segundos.',
			'Empuja con talones y mediopie sin levantar cadera.',
			'Extiende sin bloquear por completo las rodillas.'
		],
		commonMistakes: ['Despegar talones de la plataforma', 'Llevar rodillas hacia adentro', 'Bloquear rodillas con impulso']
	},
	{
		name: 'Plank',
		nameEsAr: 'Plancha abdominal',
		searchAliasesEsAr: ['Plancha', 'Planchita', 'Plank'],
		block: 'Bloque D',
		machine: 'Peso corporal',
		sets: 3,
		reps: 1,
		restSeconds: 45,
		why: 'Mejora estabilidad del tronco, util para tolerar mejor prensa, polea y largas horas de silla.',
		beginnerTip: 'Acorta la duracion antes de perder alineacion. La plancha buena vale mas que la plancha larga.',
		cues: ['Costillas abajo', 'Gluteos activos', 'Cuello neutro'],
		riskNote: 'Si la lumbar colapsa, termina la serie.',
		learningLoad: 52,
		imageUrl: 'https://i.ytimg.com/vi/pSHjTRCQxIw/hqdefault.jpg',
		imageFallbackUrl: '/exercises/plank.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=plank+exercise+proper+form',
		howTo: [
			'Apoya antebrazos justo debajo de hombros.',
			'Aprieta gluteos y abdomen antes de despegar rodillas.',
			'Mantene linea recta de cabeza a tobillos.',
			'Respira corto y controlado durante todo el tiempo.'
		],
		commonMistakes: ['Dejar caer la pelvis', 'Levantar demasiado la cadera', 'Aguantar la respiracion']
	}
];

export const habitGuides = [
	{
		title: 'Hidratacion reforzada',
		description: 'Objetivo diario orientativo: 3.2 a 3.8 litros, con 500 a 700 ml antes de entrenar y pequenos sorbos entre bloques.'
	},
	{
		title: 'Pre-entreno liviano',
		description: 'Come 45 a 60 minutos antes: pan integral con huevo, o banana y cafe. Evita entrar totalmente vacio si la semaglutida reduce apetito.'
	},
	{
		title: 'Sueno util',
		description: 'Si dormiste menos de 6 horas o la energia esta por debajo de 5/10, la sesion pasa a modo mantenimiento y no subis pesos.'
	},
	{
		title: 'Calzado estable',
		description: 'Zapatilla cerrada con base firme. Nada de sandalias ni suela blanda cuando toque prensa o caminadora.'
	}
];

export const progressionRules = [
	{
		title: 'Sobrecarga progresiva',
		description: 'Si un mismo ejercicio queda debajo de RPE 7 durante dos sesiones consecutivas, la siguiente subida sugerida es de 5% a 10%.'
	},
	{
		title: 'Validacion de fatiga',
		description: 'Energia menor a 5/10 o menos de 6 horas de sueno cambia la sesion a mantenimiento: misma tecnica, misma carga o incluso una reduccion ligera.'
	},
	{
		title: 'Alerta de salud',
		description: 'Mareos, palpitaciones o sensacion de presion anormal implican detener el entrenamiento, hidratarse, descansar y consultar con un profesional.'
	}
];

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