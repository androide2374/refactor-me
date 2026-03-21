export const athleteProfile = {
	id: 'yo',
	label: 'Mi plan',
	personName: 'Pablo Ivan Lugo',
	age: 28,
	heightCm: 170,
	weightKg: 125,
	trainingDays: 3,
	sessionMinutes: 60,
	preferredTime: 'Pendiente',
	gym: 'OnFit Premium Gym',
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
		name: 'Activacion general',
		duration: 10,
		intensity: 'RPE 4-5',
		focus: 'Subir temperatura y preparar articulaciones antes del primer ejercicio con carga.',
		prescription: 'Bici o cinta suave y movilidad corta de hombro, cadera y tobillo.',
		checkpoints: [
			'Entrar en calor sin jadeo durante 8 a 10 minutos',
			'No arrancar series pesadas en frio',
			'Chequea rango sin dolor antes de subir carga'
		]
	},
	{
		id: 'B',
		name: 'Bloque principal',
		duration: 30,
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
		name: 'Bloque accesorio + cierre',
		duration: 20,
		intensity: 'RPE 6-8',
		focus: 'Completar trabajo de aislamiento y terminar con una salida ordenada de la sesion.',
		prescription: 'Accesorios del dia con descansos de 60 a 75 segundos y vuelta a la calma corta.',
		checkpoints: [
			'No usar impulso en ejercicios de aislamiento',
			'Si cae tecnica, reduce carga',
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
				prescription: 'Cinta o bici + movilidad de hombro y torax.'
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
				duration: 5,
				intensity: 'RPE 3-4',
				prescription: 'Respiracion, hidratacion y enfriar sin corte brusco.'
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
				prescription: 'Movilidad de escpula, cadera y primer jalon liviano.'
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
				duration: 5,
				intensity: 'RPE 3-4',
				prescription: 'Cardio suave y respiracion para cierre de sesion.'
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
				prescription: 'Movilidad de hombro + 2 series de aproximacion livianas.'
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
				duration: 5,
				intensity: 'RPE 3-4',
				prescription: 'Baja pulsaciones y chequea hidratacion final.'
			}
		],
		exerciseOrder: ['Military Press', 'Lateral Raise', 'Alternating Curl', 'Triceps Bar Pushdown', 'Adductor and Abductor Machine']
	}
];

export const weeklySchedule = [
	...trainingDays.map((dayPlan) => ({
		day: dayPlan.day,
		label: `${dayPlan.label} · ${dayPlan.colorName}`,
		focus: dayPlan.title,
		note: dayPlan.note,
		href: `/dias/${dayPlan.slug}`,
		colorHex: dayPlan.colorHex,
		planLabel: dayPlan.planLabel
	}))
];

export const exercises = [
	{
		name: 'Chest Press',
		nameEsAr: 'Press de pecho en maquina',
		searchAliasesEsAr: ['Chest press', 'Press de pecho', 'Press en maquina'],
		block: 'Dia 1 (Rojo)',
		machine: 'Maquina guiada de pecho',
		sets: 3,
		reps: 10,
		restSeconds: 75,
		why: 'Base de empuje para pectoral con recorrido controlado y baja demanda de estabilidad.',
		beginnerTip: 'Manten escpulas pegadas al respaldo y no bloquees codos al final.',
		cues: ['Pecho firme', 'Muneca neutra', 'Regreso lento'],
		riskNote: 'No rebotes ni despegues hombros del respaldo.',
		learningLoad: 60,
		imageUrl: 'https://i.ytimg.com/vi/sqNwDkUU_Ps/hqdefault.jpg',
		imageFallbackUrl: '/exercises/chest-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=chest+press+machine+form',
		howTo: [
			'Ajusta el asiento para alinear agarre con mitad del pecho.',
			'Empuja sin despegar espalda del respaldo.',
			'Frena la vuelta durante 2 segundos.',
			'Finaliza sin bloquear codos con golpe.'
		],
		commonMistakes: ['Abrir codos en exceso', 'Acortar demasiado el rango', 'Rebotar en el final']
	},
	{
		name: 'Pec Fly',
		nameEsAr: 'Apertura de pecho (Pec Fly)',
		searchAliasesEsAr: ['Pec fly en maquina', 'Pec deck', 'Aperturas en maquina'],
		block: 'Dia 1 (Rojo)',
		machine: 'Maquina de aperturas para pectoral',
		sets: 3,
		reps: 10,
		restSeconds: 75,
		why: 'Aisla pectoral y mejora conexion mente-musculo sin cargas altas.',
		beginnerTip: 'Codos levemente flexionados y recorrido continuo, sin tirones.',
		cues: ['Hombros abajo', 'Arco corto y controlado', 'No choques manijas'],
		riskNote: 'No lleves codos muy atras si sientes pinzamiento anterior.',
		learningLoad: 57,
		imageUrl: 'https://i.ytimg.com/vi/Z57CtFmRMxA/hqdefault.jpg',
		imageFallbackUrl: '/exercises/chest-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=pec+fly+machine+form',
		howTo: [
			'Ajusta asiento para que codos queden a altura de pecho.',
			'Cierra brazos en arco sin golpear al centro.',
			'Regresa abriendo en 2 segundos.',
			'Frena antes de perder posicion de hombro.'
		],
		commonMistakes: ['Cerrar con impulso', 'Elevar hombros', 'Abrir de mas y perder control']
	},
	{
		name: 'Low Row',
		nameEsAr: 'Remo bajo en maquina',
		searchAliasesEsAr: ['Low row', 'Remo bajo', 'Remo sentado'],
		block: 'Dia 1 (Rojo)',
		machine: 'Remo sentado en maquina guiada',
		sets: 3,
		reps: 10,
		restSeconds: 75,
		why: 'Fortalece espalda media y mejora postura de hombros en trabajo de escritorio.',
		beginnerTip: 'Tira con codos, no con cuello. Frena la vuelta sin soltar de golpe.',
		cues: ['Pecho abierto', 'Codos atras', 'Sin balanceo'],
		riskNote: 'Evita hiperextender lumbar para completar la repeticion.',
		learningLoad: 59,
		imageUrl: 'https://i.ytimg.com/vi/GZbfZ033f74/maxresdefault.jpg',
		imageFallbackUrl: '/exercises/lat-pulldown.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=low+row+machine+proper+form',
		howTo: [
			'Sientate con pecho alto y apoyo firme de pies.',
			'Inicia el tiron llevando codos hacia atras.',
			'Pausa corta al final sin encoger hombros.',
			'Regresa en control manteniendo tension.'
		],
		commonMistakes: ['Tirar con lumbar', 'Encoger trapecio', 'Soltar la fase de regreso']
	},
	{
		name: 'Triceps Rope Pushdown',
		nameEsAr: 'Extension de triceps en polea con soga',
		searchAliasesEsAr: ['Triceps soga', 'Pushdown con cuerda', 'Polea triceps'],
		block: 'Dia 1 (Rojo)',
		machine: 'Polea alta con soga',
		sets: 4,
		reps: 12,
		restSeconds: 60,
		why: 'Agrega volumen de triceps con baja carga articular y control simple.',
		beginnerTip: 'Mantene codos pegados al cuerpo y separa la soga abajo.',
		cues: ['Codos quietos', 'Muneca neutral', 'Bajada completa'],
		riskNote: 'No arquees la espalda para mover mas peso.',
		learningLoad: 54,
		imageUrl: 'https://i.ytimg.com/vi/vB5OHsJ3EME/hqdefault.jpg',
		imageFallbackUrl: '/exercises/plank.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=rope+triceps+pushdown+form',
		howTo: [
			'Colocate frente a la polea con torso levemente inclinado.',
			'Baja extendiendo codos sin mover hombros.',
			'Separa puntas de la soga al final.',
			'Sube en control sin perder tension.'
		],
		commonMistakes: ['Abrir codos', 'Mover hombro hacia adelante', 'Usar impulso de tronco']
	},
	{
		name: 'Leg Extension',
		nameEsAr: 'Extension de cuadriceps',
		searchAliasesEsAr: ['Leg extension', 'Cuadriceps en maquina'],
		block: 'Dia 1 (Rojo)',
		machine: 'Maquina de extension de piernas',
		sets: 4,
		reps: 10,
		restSeconds: 75,
		why: 'Refuerza cuadriceps de forma guiada y mejora tolerancia de rodilla.',
		beginnerTip: 'Subi con control y no patees el ultimo tramo.',
		cues: ['Espalda apoyada', 'Control arriba', 'Bajada lenta'],
		riskNote: 'Evita bloqueo agresivo de rodilla al final.',
		learningLoad: 61,
		imageUrl: 'https://i.ytimg.com/vi/YyvSfVjQeL0/hqdefault.jpg',
		imageFallbackUrl: '/exercises/leg-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=leg+extension+proper+form',
		howTo: [
			'Ajusta respaldo y rodillo sobre empeine.',
			'Extiende rodillas en 1 a 2 segundos.',
			'Pausa breve arriba sin golpear tope.',
			'Regresa en control completo.'
		],
		commonMistakes: ['Patear con impulso', 'Despegar cadera del asiento', 'Acortar la fase negativa']
	},
	{
		name: 'Vertical Traction',
		nameEsAr: 'Vertical Trac',
		searchAliasesEsAr: ['Vertical trac', 'Dorsalera guiada', 'Jalon guiado'],
		block: 'Dia 2 (Amarillo)',
		machine: 'Maquina de traccion vertical',
		sets: 3,
		reps: 10,
		restSeconds: 75,
		why: 'Desarrolla dorsales con patron simple y estable para espalda alta.',
		beginnerTip: 'Inicia cada repeticion con pecho alto y hombros lejos de orejas.',
		cues: ['Pecho arriba', 'Codos abajo', 'Sin tiron brusco'],
		riskNote: 'No compenses tirando cuello hacia adelante.',
		learningLoad: 58,
		imageUrl: 'https://i.ytimg.com/vi/CAwf7n6Luuc/hqdefault.jpg',
		imageFallbackUrl: '/exercises/lat-pulldown.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=vertical+traction+machine+form',
		howTo: [
			'Ajusta agarre y soporte para piernas.',
			'Tira con codos hacia abajo y atras.',
			'Pausa corta abajo sin rebote.',
			'Regresa arriba en control.'
		],
		commonMistakes: ['Balancear torso', 'Encoger hombros', 'Recortar rango final']
	},
	{
		name: 'Lat Triangle Row',
		nameEsAr: 'Lat con triangulo',
		searchAliasesEsAr: ['Jalon triangulo', 'Polea agarre V', 'Lat triangulo'],
		block: 'Dia 2 (Amarillo)',
		machine: 'Polea con agarre triangulo',
		sets: 3,
		reps: 10,
		restSeconds: 75,
		why: 'Complementa dorsales y espalda media con agarre neutro mas amigable para hombro.',
		beginnerTip: 'Tira hacia pecho bajo sin inclinarte demasiado.',
		cues: ['Neutro de columna', 'Codos pegados', 'Control del retorno'],
		riskNote: 'Evita tirar con impulso lumbar.',
		learningLoad: 60,
		imageUrl: 'https://i.ytimg.com/vi/CAwf7n6Luuc/hqdefault.jpg',
		imageFallbackUrl: '/exercises/lat-pulldown.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=close+grip+lat+pulldown+triangle+form',
		howTo: [
			'Agarra triangulo y fija pecho alto.',
			'Baja al esternon guiando con codos.',
			'No rebotes en el final del rango.',
			'Sube controlado manteniendo tension.'
		],
		commonMistakes: ['Mecer torso', 'Abrir codos de mas', 'Soltar muy rapido la subida']
	},
	{
		name: 'Leg Curl',
		nameEsAr: 'Leg Curl femoral',
		searchAliasesEsAr: ['Leg curl', 'Femoral en maquina', 'Curl femoral'],
		block: 'Dia 2 (Amarillo)',
		machine: 'Maquina de femorales',
		sets: 4,
		reps: 10,
		restSeconds: 75,
		why: 'Fortalece isquios y protege rodilla equilibrando el trabajo de cuadriceps.',
		beginnerTip: 'Controla la bajada completa sin perder cadera fija.',
		cues: ['Cadera estable', 'Talon hacia gluteo', 'Bajada lenta'],
		riskNote: 'No despegar pelvis del banco en la fase final.',
		learningLoad: 62,
		imageUrl: 'https://i.ytimg.com/vi/1Tq3QdYUuHs/hqdefault.jpg',
		imageFallbackUrl: '/exercises/leg-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=seated+leg+curl+form',
		howTo: [
			'Ajusta eje de la maquina a la articulacion de rodilla.',
			'Flexiona llevando talon hacia atras.',
			'Pausa breve y regresa controlado.',
			'Manten abdomen firme para no compensar.'
		],
		commonMistakes: ['Despegar cadera', 'Moverse con impulso', 'Recortar medio recorrido']
	},
	{
		name: 'Hip Thrust',
		nameEsAr: 'Hip Thrust en barra o maquina',
		searchAliasesEsAr: ['Hip thrust', 'Empuje de cadera', 'Puente con barra'],
		block: 'Dia 2 (Amarillo)',
		machine: 'Smith o banco con barra',
		sets: 3,
		reps: 10,
		restSeconds: 90,
		why: 'Prioriza gluteos y mejora estabilidad de cadera para caminar y entrenar mejor.',
		beginnerTip: 'Menton cerca del pecho y pausa de 1 segundo arriba.',
		cues: ['Tibias verticales', 'Empuje con talones', 'Pausa arriba'],
		riskNote: 'No hiperextiendas lumbar al final.',
		learningLoad: 63,
		imageUrl: 'https://i.ytimg.com/vi/LM8XHLYJoYs/hqdefault.jpg',
		imageFallbackUrl: '/exercises/leg-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=hip+thrust+proper+form',
		howTo: [
			'Apoya escpulas en banco y pies al ancho de cadera.',
			'Eleva cadera empujando con talones.',
			'Pausa arriba contrayendo gluteos.',
			'Baja lento sin perder tension.'
		],
		commonMistakes: ['Empujar con puntas', 'Arqueo lumbar excesivo', 'Bajar demasiado rapido']
	},
	{
		name: 'Military Press',
		nameEsAr: 'Press militar en maquina',
		searchAliasesEsAr: ['Press militar', 'Shoulder press', 'Press hombros'],
		block: 'Dia 3 (Azul)',
		machine: 'Shoulder press guiado',
		sets: 4,
		reps: 10,
		restSeconds: 75,
		why: 'Construye fuerza de hombro con trayectoria estable y buen control.',
		beginnerTip: 'Manten costillas bajas y evita empujar con lumbar.',
		cues: ['Codos bajo muneca', 'Sin arco lumbar', 'Control en bajada'],
		riskNote: 'Deten el rango si hay dolor punzante en hombro.',
		learningLoad: 61,
		imageUrl: 'https://i.ytimg.com/vi/B-aVuyhvLHU/hqdefault.jpg',
		imageFallbackUrl: '/exercises/chest-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=machine+shoulder+press+form',
		howTo: [
			'Ajusta asiento para iniciar con manos a altura de menton.',
			'Empuja vertical sin cerrar hombros al frente.',
			'No bloquees codos en seco.',
			'Regresa con control hasta rango comodo.'
		],
		commonMistakes: ['Arqueo lumbar', 'Bajar demasiado rapido', 'Encoger trapecios']
	},
	{
		name: 'Lateral Raise',
		nameEsAr: 'Vuelo lateral',
		searchAliasesEsAr: ['Elevaciones laterales', 'Vuelo lateral mancuerna'],
		block: 'Dia 3 (Azul)',
		machine: 'Mancuernas o polea baja',
		sets: 3,
		reps: 10,
		restSeconds: 60,
		why: 'Refuerza deltoides medio para hombros mas estables.',
		beginnerTip: 'Subi hasta linea de hombro sin mover tronco.',
		cues: ['Codo suave', 'Muneca neutra', 'Subida controlada'],
		riskNote: 'No subas con encogimiento de trapecio.',
		learningLoad: 56,
		imageUrl: 'https://i.ytimg.com/vi/3VcKaXpzqRo/hqdefault.jpg',
		imageFallbackUrl: '/exercises/chest-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=lateral+raise+proper+form',
		howTo: [
			'Parate estable con abdomen activo.',
			'Eleva brazos a los lados hasta altura de hombro.',
			'Pausa corta arriba sin balancearte.',
			'Baja en 2 segundos manteniendo control.'
		],
		commonMistakes: ['Impulsarse con cadera', 'Subir por encima de hombro', 'Doblar de mas el codo']
	},
	{
		name: 'Alternating Curl',
		nameEsAr: 'Curl alternado',
		searchAliasesEsAr: ['Curl alternado', 'Biceps mancuerna', 'Curl unilateral'],
		block: 'Dia 3 (Azul)',
		machine: 'Mancuernas o polea baja',
		sets: 3,
		reps: 10,
		restSeconds: 60,
		why: 'Trabaja biceps con control unilateral y mejora simetria.',
		beginnerTip: 'Manten codo pegado al torso y evita girar hombro.',
		cues: ['Codo fijo', 'Subida limpia', 'Bajada lenta'],
		riskNote: 'No uses impulso de espalda para completar reps.',
		learningLoad: 55,
		imageUrl: 'https://i.ytimg.com/vi/in7PaeYlhrM/hqdefault.jpg',
		imageFallbackUrl: '/exercises/plank.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=alternating+dumbbell+curl+form',
		howTo: [
			'Parate alto con hombros relajados.',
			'Sube una mancuerna rotando palma hacia arriba.',
			'Baja en control y alterna lado.',
			'No muevas codos hacia adelante.'
		],
		commonMistakes: ['Balancear torso', 'Codos viajando al frente', 'Bajar sin control']
	},
	{
		name: 'Triceps Bar Pushdown',
		nameEsAr: 'Extension de triceps en polea con barra',
		searchAliasesEsAr: ['Triceps barra', 'Pushdown barra recta'],
		block: 'Dia 3 (Azul)',
		machine: 'Polea alta con barra recta',
		sets: 4,
		reps: 10,
		restSeconds: 60,
		why: 'Permite volumen de triceps estable para complementar los empujes de hombro y pecho.',
		beginnerTip: 'No abras codos y controla todo el recorrido.',
		cues: ['Codos cerca', 'Bajada completa', 'Subida controlada'],
		riskNote: 'Evita inclinarte en exceso para mover mas carga.',
		learningLoad: 56,
		imageUrl: 'https://i.ytimg.com/vi/2-LAMcpzODU/hqdefault.jpg',
		imageFallbackUrl: '/exercises/plank.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=triceps+pushdown+straight+bar+form',
		howTo: [
			'Agarra barra al ancho de hombros.',
			'Extiende codos hacia abajo sin mover hombro.',
			'Pausa breve en extension completa.',
			'Regresa lento hasta 90 grados.'
		],
		commonMistakes: ['Separar codos', 'Usar peso excesivo', 'Recortar rango final']
	},
	{
		name: 'Adductor and Abductor Machine',
		nameEsAr: 'Maquinas aductores y abductores',
		searchAliasesEsAr: ['Aductores', 'Abductores', 'Cadera en maquina'],
		block: 'Dia 3 (Azul)',
		machine: 'Maquinas de cadera (aductor/abductor)',
		sets: 4,
		reps: 10,
		restSeconds: 60,
		why: 'Mejora estabilidad de cadera y control de rodilla en movimientos diarios.',
		beginnerTip: 'Recorrido completo con control, sin golpear topes.',
		cues: ['Espalda apoyada', 'Ritmo constante', 'Sin rebote'],
		riskNote: 'No fuerces apertura o cierre con dolor en cadera.',
		learningLoad: 58,
		imageUrl: 'https://i.ytimg.com/vi/G_8LItOiZ0Q/hqdefault.jpg',
		imageFallbackUrl: '/exercises/leg-press.svg',
		videoUrl: 'https://www.youtube.com/results?search_query=adductor+abductor+machine+form',
		howTo: [
			'Ajusta respaldo y rango comodo de maquina.',
			'Empuja o cierra en 1 a 2 segundos.',
			'Pausa minima en final del recorrido.',
			'Vuelve lento sin perder postura.'
		],
		commonMistakes: ['Golpear topes', 'Inclinar torso', 'Moverse con impulso']
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