export interface Exercise {
    name: string;
    nameEs: string;
    muscleGroup: string;
    sets: number;
    reps: number;
    isTimed?: boolean;
    description: string;
    cues: string[];
    commonMistakes: string[];
    imageUrl: string;
    imageFallbackUrl: string;
    videoUrl: string;
    restSeconds: number;
    dayId: string;
}

export const exercises: Exercise[] = [
    // ================================================================
    // DIA 1 · Piernas delante y Hombros
    // ================================================================

    {
        name: 'Shoulder Press',
        nameEs: 'Press de hombros en maquina (SHOULDER PRESS)',
        muscleGroup: 'Deltoides (anterior y medio)',
        sets: 3,
        reps: 10,
        description: 'Sentado con la espalda apoyada en el respaldo, empuja las manijas hacia arriba hasta extender los brazos sin bloquear los codos. Baja controlado en 2 segundos hasta que las manos queden a la altura de los hombros.',
        cues: ['Espalda pegada al respaldo', 'No bloquees codos al final', 'Bajada en 2 segundos', 'Munecas firmes y neutras'],
        commonMistakes: ['Arquear la espalda baja', 'Empujar con impulso', 'Bloquear codos al subir', 'Encoger trapecios'],
        imageUrl: 'https://i.ytimg.com/vi/B-aVuyhvLHU/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=shoulder+press+machine+form',
        restSeconds: 75,
        dayId: 'day-1'
    },
    {
        name: 'Rear Delt Fly',
        nameEs: 'Vuelos posteriores en maquina (VUELOS POSTERIORES CON MAQ)',
        muscleGroup: 'Deltoide posterior',
        sets: 3,
        reps: 10,
        description: 'Sentado de frente al respaldo en maquina de pec fly invertida. Agarra las manijas con brazos casi extendidos y lleva los codos hacia atras abriendo en arco. Mantene una ligera flexion de codos todo el recorrido.',
        cues: ['Pecho contra el respaldo', 'Codos ligeramente flexionados', 'Abre sin impulso', 'Apreta escapulas al final'],
        commonMistakes: ['Encoger los hombros', 'Usar mucho peso y acortar recorrido', 'Doblar demasiado los codos', 'Hacer el movimiento con impulso'],
        imageUrl: 'https://i.ytimg.com/vi/ttvfGg9d76c/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=reverse+pec+deck+rear+delt+fly+form',
        restSeconds: 60,
        dayId: 'day-1'
    },
    {
        name: 'Leg Press 45',
        nameEs: 'Prensa 45 grados (PRENSA 45°)',
        muscleGroup: 'Cuadriceps, gluteos',
        sets: 4,
        reps: 12,
        description: 'Sentado en la prensa a 45°, pies al ancho de hombros en la parte media-alta de la plataforma. Destraba los seguros y baja las rodillas hacia el pecho en 2 segundos sin que la cadera se despegue del respaldo. Empuja con talones hasta casi extender sin bloquear rodillas.',
        cues: ['Pies al ancho de hombros', 'Cadera pegada al respaldo', 'Baja en 2 segundos', 'Empuja con talones', 'No bloquees rodillas'],
        commonMistakes: ['Bajar demasiado y despegar cadera', 'Bloquear rodillas al subir', 'Colocar pies muy abajo en la plataforma', 'Subir solo con puntas de pie'],
        imageUrl: 'https://i.ytimg.com/vi/VFk3RzndySc/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=leg+press+45+degree+form',
        restSeconds: 90,
        dayId: 'day-1'
    },
    {
        name: 'Leg Extension',
        nameEs: 'Extension de cuadriceps (LEG EXTENSION)',
        muscleGroup: 'Cuadriceps',
        sets: 4,
        reps: 12,
        description: 'Sentado con la espalda firme contra el respaldo y el rodillo ajustado sobre el empeine. Extiende las rodillas en 1-2 segundos, pausa breve arriba contrayendo cuadriceps, y baja en 2-3 segundos sin que el peso caiga de golpe.',
        cues: ['Espalda contra el respaldo', 'Subida controlada', 'Pausa arriba contrayendo', 'Bajada lenta sin caer'],
        commonMistakes: ['Patear con impulso al subir', 'Bajar el peso de golpe', 'Despegar la cadera del asiento', 'Hacer solo medio recorrido'],
        imageUrl: 'https://i.ytimg.com/vi/YyvSfVjQeL0/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=leg+extension+machine+form',
        restSeconds: 75,
        dayId: 'day-1'
    },
    {
        name: 'Calf Raise',
        nameEs: 'Gemelos en maquina (GEMELOS)',
        muscleGroup: 'Gemelos (gastrocnemio)',
        sets: 4,
        reps: 12,
        description: 'De pie en la maquina de gemelos con los hombros bajo las almohadillas. Talones en el aire, baja despacio hasta sentir estiramiento y luego empuja con las puntas hasta quedar en punta maxima. Pausa 1 segundo arriba y controla la bajada.',
        cues: ['Talones al vacio', 'Subida explosiva', 'Pausa 1s arriba', 'Bajada en 2 segundos', 'Rodillas apenas flexionadas'],
        commonMistakes: ['Rebotar en cada repeticion', 'No bajar lo suficiente', 'Doblar mucho las rodillas', 'Ir demasiado rapido'],
        imageUrl: 'https://i.ytimg.com/vi/G_8LItOiZ0Q/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=standing+calf+raise+machine+form',
        restSeconds: 60,
        dayId: 'day-1'
    },
    {
        name: 'Sissy Squat',
        nameEs: 'Sentadilla Sissy en maquina (SENTADILLA SISSY)',
        muscleGroup: 'Cuadriceps (recto femoral)',
        sets: 4,
        reps: 12,
        description: 'De pie en la maquina Sissy con los talones fijos y las pantorrillas contra el soporte. Inclina el torso hacia atras mientras flexionas las rodillas, dejando que las caderas vayan hacia adelante. Baja hasta que los muslos queden paralelos al piso y subi en control.',
        cues: ['Talones fijos en plataforma', 'Torso firme, no colapse', 'Rodillas alineadas con punta del pie', 'Subi apretando cuadriceps'],
        commonMistakes: ['Bajar demasiado rapido', 'Perder el control del torso', 'Rodillas se juntan o abren', 'No llegar a paralelo por miedo'],
        imageUrl: 'https://i.ytimg.com/vi/VMECfL0xDkY/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=sissy+squat+machine+form',
        restSeconds: 75,
        dayId: 'day-1'
    },
    {
        name: 'Smith Squat',
        nameEs: 'Sentadilla en maquina Smith (SENTADILLA SMITH)',
        muscleGroup: 'Cuadriceps, gluteos, isquiotibiales',
        sets: 4,
        reps: 12,
        description: 'Coloca la barra Smith sobre los trapecios, pies al ancho de hombros ligeramente adelantados. Destraba la barra girando las munecas. Baja flexionando rodillas y cadera hasta que los muslos esten paralelos al piso o un poco mas. Mantene el pecho arriba y empuja con talones para subir.',
        cues: ['Pecho arriba y mirada al frente', 'Pies ligeramente adelantados', 'Baja en 2 segundos', 'Rodillas en linea con pies', 'Empuja con talones'],
        commonMistakes: ['Inclinar demasiado el torso', 'Rodillas que sobrepasan mucho las puntas', 'Bajar a medias', 'Pies muy atras o muy adelante'],
        imageUrl: 'https://i.ytimg.com/vi/bJHyfB_FU5w/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=smith+machine+squat+form',
        restSeconds: 90,
        dayId: 'day-1'
    },

    // ================================================================
    // DIA 2 · Pecho y Triceps (Empuje)
    // ================================================================

    {
        name: 'Chest Press',
        nameEs: 'Press de pecho en maquina (CHEST PRESS)',
        muscleGroup: 'Pectoral mayor',
        sets: 4,
        reps: 10,
        description: 'Sentado con la espalda completa pegada al respaldo, ajusta el asiento para que las manijas queden alineadas con la mitad del pecho. Empuja hacia adelante sin despegar escapulas, frenando antes de bloquear los codos. Regresa en 2 segundos manteniendo tension constante.',
        cues: ['Escapulas pegadas al respaldo', 'Munecas neutras', 'No bloquees codos', 'Regreso en 2 segundos', 'Pecho firme'],
        commonMistakes: ['Despegar espalda del respaldo', 'Abrir codos en exceso', 'Bloquear con golpe al final', 'Hacer solo medio recorrido'],
        imageUrl: 'https://i.ytimg.com/vi/sqNwDkUU_Ps/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=chest+press+machine+form',
        restSeconds: 75,
        dayId: 'day-2'
    },
    {
        name: 'Pec Fly',
        nameEs: 'Apertura de pecho en maquina (PEC FLY)',
        muscleGroup: 'Pectoral mayor',
        sets: 4,
        reps: 10,
        description: 'Sentado en la maquina de aperturas con la espalda firme. Codos a la altura del pecho y levemente flexionados. Cierra los brazos en arco sin golpear las manijas al centro. Regresa abriendo en 2 segundos sin que los codos vayan demasiado atras.',
        cues: ['Codos a altura de pecho', 'Hombros abajo y atras', 'Arco controlado', 'Frena antes de perder postura'],
        commonMistakes: ['Cerrar con impulso de pecho', 'Elevar los hombros', 'Abrir demasiado atras', 'Flexionar mucho los codos'],
        imageUrl: 'https://i.ytimg.com/vi/Z57CtFmRMxA/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=pec+fly+machine+form',
        restSeconds: 75,
        dayId: 'day-2'
    },
    {
        name: 'Incline DB Press',
        nameEs: 'Press inclinado con mancuernas (PRESS BANCO INCLINADO)',
        muscleGroup: 'Pectoral superior',
        sets: 4,
        reps: 10,
        description: 'Banco inclinado a 30-45 grados. Con una mancuerna en cada mano a la altura del pecho, palmas mirando hacia adelante. Empuja hacia arriba juntando las mancuernas al final sin chocarlas. Baja en 2 segundos hasta que los codos queden apenas por debajo del hombro.',
        cues: ['Banco a 30-45 grados', 'Pecho abierto y firme', 'No choques mancuernas arriba', 'Baja en 2 segundos', 'Pies apoyados en el piso'],
        commonMistakes: ['Poner el banco muy vertical', 'Chocar las mancuernas', 'Bajar solo a la mitad', 'Arquear la espalda excesivamente'],
        imageUrl: 'https://i.ytimg.com/vi/SrqOu55lrYU/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=incline+dumbbell+press+form',
        restSeconds: 75,
        dayId: 'day-2'
    },
    {
        name: 'Incline DB Fly',
        nameEs: 'Apertura en banco inclinado (APERTURA BANCO INCLINADO)',
        muscleGroup: 'Pectoral superior',
        sets: 4,
        reps: 10,
        description: 'Banco inclinado a 30 grados. Mancuernas arriba con brazos extendidos y palmas enfrentadas. Abre los brazos en arco manteniendo una ligera flexion de codos. Baja hasta sentir estiramiento en el pecho sin forzar los hombros. Cierra en arco volviendo a la posicion inicial.',
        cues: ['Codos ligeramente flexionados', 'Arco amplio y controlado', 'No bajes mas alla del pecho', 'Cierra apretando pectoral', 'Munecas firmes'],
        commonMistakes: ['Doblar mucho los codos (se vuelve press)', 'Bajar con impulso', 'Estirar demasiado y lastimar hombro', 'Usar pesos altos y perder forma'],
        imageUrl: 'https://i.ytimg.com/vi/bDA74-BtSKs/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=incline+dumbbell+fly+form',
        restSeconds: 75,
        dayId: 'day-2'
    },
    {
        name: 'Triceps Bar Pushdown',
        nameEs: 'Extension de triceps con barra (EXTENSION EN POLEA CON BARRA)',
        muscleGroup: 'Triceps braquial',
        sets: 4,
        reps: 10,
        description: 'De pie frente a la polea alta, agarra la barra recta al ancho de hombros. Codos pegados a los costados y levemente adelantados. Extiende hacia abajo hasta bloquear sin golpe. Regresa en 2 segundos hasta que los antebrazos esten a 90 grados con los brazos.',
        cues: ['Codos pegados al torso', 'No muevas los hombros', 'Extension completa', 'Regreso en 2 segundos', 'Torso firme'],
        commonMistakes: ['Abrir los codos hacia afuera', 'Mover los hombros hacia adelante', 'Usar impulso del cuerpo', 'Hacer recorrido corto'],
        imageUrl: 'https://i.ytimg.com/vi/2-LAMcpzODU/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=triceps+pushdown+straight+bar+form',
        restSeconds: 60,
        dayId: 'day-2'
    },
    {
        name: 'French Press',
        nameEs: 'Press frances en polea o barra Z (PRESS FRANCES)',
        muscleGroup: 'Triceps (porcion larga)',
        sets: 4,
        reps: 10,
        description: 'Acostado en banco plano con barra Z (o en polea con soga). Brazos extendidos hacia arriba, codos fijos apuntando al techo. Flexiona los codos bajando la barra hacia la frente o detras de la cabeza. Extiende de vuelta sin mover los codos de lugar.',
        cues: ['Codos fijos al techo', 'Baja controlado a la frente', 'Solo se mueve el antebrazo', 'No abras los codos'],
        commonMistakes: ['Abrir los codos hacia los lados', 'Mover todo el brazo desde el hombro', 'Bajar muy rapido y sin control', 'Usar peso excesivo'],
        imageUrl: 'https://i.ytimg.com/vi/_lKnbAeNCTE/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=french+press+skull+crusher+form',
        restSeconds: 60,
        dayId: 'day-2'
    },
    {
        name: 'Triceps Rope Pushdown',
        nameEs: 'Extension de triceps con soga (CONCENTRADO POLEA)',
        muscleGroup: 'Triceps braquial',
        sets: 4,
        reps: 10,
        description: 'De pie frente a la polea alta con la soga. Agarra cada extremo, codos pegados al cuerpo. Extiende hacia abajo y al final separa las puntas de la soga hacia afuera para una contraccion extra. Regresa en control sin perder la posicion de codos.',
        cues: ['Codos clavados al torso', 'Separa puntas de soga al final', 'Regreso controlado', 'Torso firme sin balanceo'],
        commonMistakes: ['Abrir los codos', 'Mover los hombros al empujar', 'No separar la soga al final', 'Balancear el cuerpo para mover mas peso'],
        imageUrl: 'https://i.ytimg.com/vi/vB5OHsJ3EME/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=rope+triceps+pushdown+form',
        restSeconds: 60,
        dayId: 'day-2'
    },

    // ================================================================
    // DIA 3 · Piernas atras y Hombros
    // ================================================================

    {
        name: 'Military Press',
        nameEs: 'Press militar en maquina (PRESS MILITAR)',
        muscleGroup: 'Deltoides (anterior y medio)',
        sets: 4,
        reps: 10,
        description: 'Sentado en la maquina de press de hombros con la espalda firme. Manijas a la altura de los hombros. Empuja hacia arriba sin despegar la espalda, frenando justo antes de bloquear los codos. Baja en 2 segundos hasta que los codos esten a 90 grados.',
        cues: ['Espalda contra respaldo', 'No bloquees codos', 'Bajada lenta', 'Costillas bajas, sin arco lumbar'],
        commonMistakes: ['Arquear la zona lumbar', 'Bloquear codos con golpe', 'Bajar muy rapido', 'Encoger los hombros al final'],
        imageUrl: 'https://i.ytimg.com/vi/B-aVuyhvLHU/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=military+shoulder+press+machine+form',
        restSeconds: 75,
        dayId: 'day-3'
    },
    {
        name: 'Cable Front Raise',
        nameEs: 'Vuelos frontales en polea (VUELOS FRONTALES POLEA)',
        muscleGroup: 'Deltoide anterior',
        sets: 4,
        reps: 10,
        description: 'De pie de espaldas a la polea baja, agarra la soga o barra con ambas manos. Con brazos extendidos y una ligera flexion de codos, eleva los brazos hacia adelante hasta la altura de los hombros. Baja en 2 segundos sin perder control.',
        cues: ['Codos ligeramente flexionados', 'Subi hasta altura de hombros', 'Sin impulso de cadera', 'Bajada en 2 segundos'],
        commonMistakes: ['Usar impulso de la espalda baja', 'Subir por encima de los hombros', 'Balancear el cuerpo', 'Flexionar demasiado los codos'],
        imageUrl: 'https://i.ytimg.com/vi/3VcKaXpzqRo/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=cable+front+raise+form',
        restSeconds: 60,
        dayId: 'day-3'
    },
    {
        name: 'Leg Curl',
        nameEs: 'Curl femoral en maquina (LEG CURL)',
        muscleGroup: 'Isquiotibiales',
        sets: 4,
        reps: 12,
        description: 'Sentado o acostado en la maquina de femorales con el eje alineado a la rodilla. Flexiona las rodillas llevando los talones hacia los gluteos en 1-2 segundos. Pausa breve arriba y baja en control completo sin que el peso caiga.',
        cues: ['Cadera pegada al banco', 'Talones hacia gluteos', 'Pausa arriba', 'Bajada en 2-3 segundos'],
        commonMistakes: ['Despegar la cadera del banco', 'Hacer el movimiento con impulso', 'Recortar el recorrido', 'Dejar caer el peso en la bajada'],
        imageUrl: 'https://i.ytimg.com/vi/1Tq3QdYUuHs/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=seated+leg+curl+form',
        restSeconds: 75,
        dayId: 'day-3'
    },
    {
        name: 'Adductor Machine',
        nameEs: 'Maquina de aductores (MAQ. ADUCTORES)',
        muscleGroup: 'Aductores de cadera',
        sets: 4,
        reps: 10,
        description: 'Sentado en la maquina con las piernas abiertas y las almohadillas contra la cara interna de las rodillas. Cierra las piernas juntando las rodillas en 1-2 segundos. Pausa breve al centro y regresa abriendo en control.',
        cues: ['Espalda firme contra respaldo', 'Movimiento controlado', 'Sin golpear al cerrar', 'Abre sin perder postura'],
        commonMistakes: ['Golpear las almohadillas al cerrar', 'Inclinar el torso', 'Ir demasiado rapido', 'Usar rango muy corto'],
        imageUrl: 'https://i.ytimg.com/vi/G_8LItOiZ0Q/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=adductor+machine+form',
        restSeconds: 60,
        dayId: 'day-3'
    },
    {
        name: 'Abductor Machine',
        nameEs: 'Maquina de abductores (MAQ. ABDUCTORES)',
        muscleGroup: 'Abductores, gluteo medio',
        sets: 4,
        reps: 10,
        description: 'Sentado con las almohadillas contra la cara externa de las rodillas. Abre las piernas en 1-2 segundos llevando las rodillas hacia afuera. Pausa breve en la apertura maxima y cierra en control volviendo a la posicion inicial.',
        cues: ['Espalda firme', 'Apertura controlada', 'Pausa afuera', 'Cierre sin golpe'],
        commonMistakes: ['Abrir con impulso', 'Golpear al cerrar', 'Inclinar el torso', 'No llegar al rango completo'],
        imageUrl: 'https://i.ytimg.com/vi/G_8LItOiZ0Q/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=abductor+machine+form',
        restSeconds: 60,
        dayId: 'day-3'
    },
    {
        name: 'Multi Hip',
        nameEs: 'Patada de gluteo en multi-hip (MULTI-HIP)',
        muscleGroup: 'Gluteo mayor',
        sets: 4,
        reps: 8,
        description: 'De pie en la maquina multi-hip de frente al respaldo. Apoya el antebrazo y coloca el rodillo justo debajo del gluteo en la pierna a trabajar. Extiende la cadera llevando la pierna hacia atras sin arquear la lumbar. Pausa atras y regresa en control.',
        cues: ['Torso firme y neutro', 'Empuja con el gluteo', 'No arquees la lumbar', 'Regreso controlado', '8 reps por pierna'],
        commonMistakes: ['Hiperextender la zona lumbar', 'Usar impulso', 'Hacer solo medio recorrido', 'No apoyar bien el torso'],
        imageUrl: 'https://i.ytimg.com/vi/LM8XHLYJoYs/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=multi+hip+machine+glute+kickback+form',
        restSeconds: 75,
        dayId: 'day-3'
    },
    {
        name: 'Hip Thrust Machine',
        nameEs: 'Hip Thrust en maquina (HIP THRUST MAQ)',
        muscleGroup: 'Gluteo mayor',
        sets: 4,
        reps: 10,
        description: 'Sentado en la maquina de hip thrust con la espalda apoyada en el respaldo y el cinturon sobre la cadera. Empuja la cadera hacia arriba y adelante apretando gluteos. Pausa 1 segundo arriba y baja en 2 segundos sin perder tension.',
        cues: ['Empuja con cadera, no con lumbar', 'Apreta gluteos arriba', 'Pausa 1s arriba', 'Bajada en 2 segundos'],
        commonMistakes: ['Hiperextender la lumbar al final', 'Bajar sin control', 'No llegar a extension completa', 'Usar los brazos para empujar'],
        imageUrl: 'https://i.ytimg.com/vi/LM8XHLYJoYs/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=hip+thrust+machine+form',
        restSeconds: 90,
        dayId: 'day-3'
    },

    // ================================================================
    // DIA 4 · Espalda y Biceps (Traccion)
    // ================================================================

    {
        name: 'Vertical Traction',
        nameEs: 'Vertical Trac dorsalera (VERTICAL TRAC)',
        muscleGroup: 'Dorsal ancho',
        sets: 4,
        reps: 10,
        description: 'Sentado en la maquina de traccion vertical con las piernas bajo los soportes. Agarre amplio en la barra. Tira hacia abajo llevando los codos hacia el pecho sin balancear el torso. Pausa breve abajo y subi en control.',
        cues: ['Pecho alto y abierto', 'Codos hacia abajo y atras', 'Sin balanceo de torso', 'Subida controlada'],
        commonMistakes: ['Balancear el torso', 'Encoger los hombros', 'Tirar con los brazos en vez de la espalda', 'Soltar la fase de subida'],
        imageUrl: 'https://i.ytimg.com/vi/CAwf7n6Luuc/hqdefault.jpg',
        imageFallbackUrl: '/exercises/lat-pulldown.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=vertical+traction+machine+form',
        restSeconds: 75,
        dayId: 'day-4'
    },
    {
        name: 'Low Row',
        nameEs: 'Remo bajo en maquina (LOW ROW)',
        muscleGroup: 'Dorsal, romboides',
        sets: 4,
        reps: 10,
        description: 'Sentado en la maquina de remo bajo con pecho contra el respaldo y pies firmes. Agarra las manijas y tira hacia atras llevando los codos pegados al cuerpo. Apreta escapulas al final. Regresa en control sin soltar de golpe.',
        cues: ['Pecho contra el respaldo', 'Codos cerca del cuerpo', 'Apreta escapulas atras', 'Regreso en 2 segundos'],
        commonMistakes: ['Tirar con la lumbar', 'Encoger los hombros', 'Soltar el peso en la vuelta', 'No apretar escapulas'],
        imageUrl: 'https://i.ytimg.com/vi/GZbfZ033f74/hqdefault.jpg',
        imageFallbackUrl: '/exercises/lat-pulldown.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=low+row+machine+form',
        restSeconds: 75,
        dayId: 'day-4'
    },
    {
        name: 'Lat Bar Pronated',
        nameEs: 'Jalon con barra pronada neutro (LAT BARRA PRONADO)',
        muscleGroup: 'Dorsal ancho',
        sets: 4,
        reps: 10,
        description: 'En polea alta con barra larga, agarre prono (palmas hacia adelante) al ancho de hombros. Tira la barra hacia el pecho alto manteniendo el torso firme. Baja guiando con los codos. Regresa en control hasta extender los brazos.',
        cues: ['Pecho alto', 'Codos hacia abajo', 'Torso firme sin balanceo', 'Control en el regreso'],
        commonMistakes: ['Mecer el torso hacia atras', 'Abrir demasiado los codos', 'No estirar del todo arriba', 'Tirar con biceps en vez de espalda'],
        imageUrl: 'https://i.ytimg.com/vi/CAwf7n6Luuc/hqdefault.jpg',
        imageFallbackUrl: '/exercises/lat-pulldown.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=lat+pulldown+pronated+grip+form',
        restSeconds: 75,
        dayId: 'day-4'
    },
    {
        name: 'Lat Triangle',
        nameEs: 'Jalon con triangulo (LAT CON TRIANGULO)',
        muscleGroup: 'Dorsal, romboides',
        sets: 4,
        reps: 10,
        description: 'En polea alta con agarre triangulo (V-grip). Tira hacia el esternon manteniendo los codos cerca del cuerpo y el pecho alto. Aprieta escapulas al final. Regresa en control sin perder la postura.',
        cues: ['Codos cerca del cuerpo', 'Tira al pecho bajo', 'Apreta escapulas', 'Regreso controlado'],
        commonMistakes: ['Abrir los codos', 'Inclinarse demasiado hacia atras', 'No apretar al final', 'Soltar de golpe la subida'],
        imageUrl: 'https://i.ytimg.com/vi/CAwf7n6Luuc/hqdefault.jpg',
        imageFallbackUrl: '/exercises/lat-pulldown.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=close+grip+lat+pulldown+triangle+form',
        restSeconds: 75,
        dayId: 'day-4'
    },
    {
        name: 'DB Pullover',
        nameEs: 'Pull over con mancuerna (PULL OVER CON MANC)',
        muscleGroup: 'Dorsal, pectoral',
        sets: 4,
        reps: 10,
        description: 'Acostado transversal en banco plano con solo la espalda alta apoyada. Mancuerna tomada con ambas manos por encima del pecho, brazos casi extendidos. Baja la mancuerna hacia atras en arco hasta sentir estiramiento en dorsales. Regresa en arco al frente.',
        cues: ['Brazos con ligera flexion', 'Arco controlado hacia atras', 'No bajes mas alla de la cabeza', 'Aprieta dorsales al subir'],
        commonMistakes: ['Doblar mucho los codos', 'Bajar con impulso', 'Usar demasiado peso', 'No apoyar bien la espalda en el banco'],
        imageUrl: 'https://i.ytimg.com/vi/v3a6Yq2eV7U/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=dumbbell+pullover+form',
        restSeconds: 75,
        dayId: 'day-4'
    },
    {
        name: 'Barbell Shrug',
        nameEs: 'Encogimiento de hombros con barra (ENCOGIMIENTO CON BARRA)',
        muscleGroup: 'Trapecio superior',
        sets: 4,
        reps: 10,
        description: 'De pie con barra al frente tomada al ancho de hombros, brazos extendidos. Encoge los hombros hacia arriba como queriendo tocar las orejas. Pausa 1 segundo arriba y baja en control. No gires los hombros, solo subi y baja.',
        cues: ['Brazos extendidos', 'Subi hombros hacia orejas', 'Pausa 1s arriba', 'No gires ni rodes los hombros'],
        commonMistakes: ['Rotar los hombros en circulos', 'Doblar los codos para hacer un remo', 'Usar demasiado peso', 'No llegar al rango completo'],
        imageUrl: 'https://i.ytimg.com/vi/cJRVVY3IV5E/hqdefault.jpg',
        imageFallbackUrl: '/exercises/chest-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=barbell+shrug+form',
        restSeconds: 60,
        dayId: 'day-4'
    },
    {
        name: 'Hammer Curl',
        nameEs: 'Curl alternado martillo (CURL ALTERNADO MARTILLO)',
        muscleGroup: 'Biceps, braquial anterior',
        sets: 4,
        reps: 10,
        description: 'De pie con una mancuerna en cada mano, palmas enfrentadas (agarre martillo). Mantene los codos pegados al torso. Subi una mancuerna hacia el hombro sin girar la muneca. Baja en control y alterna con el otro brazo.',
        cues: ['Codos pegados al torso', 'Palmas enfrentadas siempre', 'Subida sin impulso', 'Bajada en 2 segundos'],
        commonMistakes: ['Balancear el cuerpo', 'Mover los codos hacia adelante', 'Girar la muneca', 'Bajar sin control'],
        imageUrl: 'https://i.ytimg.com/vi/in7PaeYlhrM/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=hammer+curl+alternating+form',
        restSeconds: 60,
        dayId: 'day-4'
    },
    {
        name: 'Curl 21',
        nameEs: 'Curl 21 (7-7-7) (CURL 21)',
        muscleGroup: 'Biceps braquial',
        sets: 3,
        reps: 21,
        description: 'Protocolo 21: 7 repeticiones en el rango inferior (brazos extendidos a 90 grados), 7 en el rango superior (90 grados a contraccion maxima), y 7 repeticiones completas. Se hace con barra recta o Z. Sin descanso entre los tres bloques de 7. Cada serie completa son 21 reps.',
        cues: ['7 abajo: de extension a 90°', '7 arriba: de 90° a cierre total', '7 completas: rango total', 'Sin descanso entre bloques', 'Codos fijos al torso'],
        commonMistakes: ['Descansar entre bloques de 7', 'Mover los codos', 'Usar demasiado peso', 'No completar el rango en cada fase'],
        imageUrl: 'https://i.ytimg.com/vi/jHjWF4nJUJE/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=21s+bicep+curl+form',
        restSeconds: 90,
        dayId: 'day-4'
    },
    {
        name: 'Scott Curl',
        nameEs: 'Curl en banco Scott con mancuerna (BANCO SCOTT)',
        muscleGroup: 'Biceps braquial',
        sets: 4,
        reps: 8,
        description: 'Sentado en el banco Scott con el brazo apoyado sobre el cojin inclinado. Con una mancuerna, baja completamente hasta extender el brazo sin bloquear el codo. Subi en 2 segundos apretando el biceps. 4 series de 8 repeticiones por brazo.',
        cues: ['Brazo completo apoyado', 'Extension completa abajo', 'Subida en 2 segundos', 'Aprieta biceps arriba', '8 reps por brazo'],
        commonMistakes: ['No bajar del todo', 'Usar impulso del hombro', 'Levantar el brazo del cojin', 'Usar peso excesivo'],
        imageUrl: 'https://i.ytimg.com/vi/in7PaeYlhrM/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=scott+curl+dumbbell+form',
        restSeconds: 75,
        dayId: 'day-4'
    },

    // ================================================================
    // CORE · Todos los dias
    // ================================================================

    // --- Dia 1 ---
    {
        name: 'Plank',
        nameEs: 'Plancha abdominal (PLANCHA)',
        muscleGroup: 'Abdominales (recto abdominal, transverso)',
        sets: 3,
        reps: 30,
        isTimed: true,
        description: 'Boca abajo apoyado sobre antebrazos y puntas de pies. Cuerpo en linea recta de la cabeza a los talones. Contrae el abdomen y gluteos. Mantene la posicion 30 segundos sin que la cadera se hunda ni se eleve.',
        cues: ['Codos bajo los hombros', 'Abdomen contraido', 'Cadera neutra, no hundida', 'Gluteos apretados', 'Respiracion constante'],
        commonMistakes: ['Dejar caer la cadera', 'Elevar demasiado la cadera', 'Aguantar la respiracion', 'Mirar hacia adelante tensionando el cuello'],
        imageUrl: 'https://i.ytimg.com/vi/pSHjTRCQxIw/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=plank+proper+form',
        restSeconds: 45,
        dayId: 'day-1'
    },
    {
        name: 'Heel Touch',
        nameEs: 'Tocar talones colchoneta (INFERIOR COLCHONETA)',
        muscleGroup: 'Abdominales inferiores, oblicuos',
        sets: 3,
        reps: 12,
        description: 'Acostado boca arriba con rodillas flexionadas, pies apoyados y brazos a los costados. Eleva ligeramente la cabeza y los hombros. Inclinate hacia la derecha tocando el talon derecho con la mano derecha. Volve al centro y repeti hacia la izquierda. Alterna lados.',
        cues: ['Lumbar pegada a la colchoneta', 'Movimiento corto y controlado', 'No tires del cuello', 'Contrae abdomen al tocar'],
        commonMistakes: ['Tirar del cuello con las manos', 'Levantar demasiado el torso', 'Hacer el movimiento muy rapido', 'Despegar la lumbar'],
        imageUrl: 'https://i.ytimg.com/vi/JJVmJpYoO_U/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=heel+touches+ab+exercise+form',
        restSeconds: 45,
        dayId: 'day-1'
    },
    {
        name: 'Side Plank',
        nameEs: 'Plancha lateral (PLANCHA LATERAL)',
        muscleGroup: 'Oblicuos, abdominales',
        sets: 3,
        reps: 15,
        isTimed: true,
        description: 'Acostado de costado, apoyado sobre un antebrazo con el codo bajo el hombro. Piernas extendidas y apiladas. Eleva la cadera hasta formar una linea recta. Mantene 15 segundos. Cambia de lado.',
        cues: ['Codo bajo el hombro', 'Cadera alta y alineada', 'Abdomen duro', 'No dejes caer la cadera', '15 segundos por lado'],
        commonMistakes: ['Dejar caer la cadera', 'Rotar el cuerpo hacia adelante', 'Apoyar la cabeza en el hombro', 'Aguantar la respiracion'],
        imageUrl: 'https://i.ytimg.com/vi/pSHjTRCQxIw/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=side+plank+proper+form',
        restSeconds: 45,
        dayId: 'day-1'
    },

    // --- Dia 2 ---
    {
        name: 'Crunch',
        nameEs: 'Abdominales cortos colchoneta (COLCHONETA CORTITOS)',
        muscleGroup: 'Abdominales (recto abdominal)',
        sets: 4,
        reps: 10,
        description: 'Acostado boca arriba con rodillas flexionadas, pies apoyados y manos detras de la cabeza sin entrelazar los dedos. Eleva los hombros y la espalda alta contrayendo el abdomen. Movimiento corto, no hace falta subir todo el torso. Baja en control.',
        cues: ['Mirada al techo', 'Manos no tiran del cuello', 'Lumbar pegada al piso', 'Subi solo hombros y escapulas', 'Bajada controlada'],
        commonMistakes: ['Tirar del cuello con las manos', 'Subir todo el torso (no es un sit-up)', 'Hacer impulso con la cabeza', 'Despegar la lumbar'],
        imageUrl: 'https://i.ytimg.com/vi/Xyd_faJPhuA/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=crunches+proper+form',
        restSeconds: 45,
        dayId: 'day-2'
    },
    {
        name: 'Russian Twist',
        nameEs: 'Russian Twist cruzados (CRUZADOS)',
        muscleGroup: 'Oblicuos, abdominales',
        sets: 4,
        reps: 8,
        description: 'Sentado con las rodillas flexionadas, pies apenas elevados del piso y torso inclinado hacia atras. Con las manos juntas al frente, gira el torso hacia la derecha llevando las manos al costado de la cadera. Vuelve al centro y gira hacia la izquierda. 8 por lado.',
        cues: ['Torso inclinado atras 45°', 'Gira desde el tronco, no los brazos', 'Pies elevados', 'Movimiento controlado'],
        commonMistakes: ['Mover solo los brazos', 'Redondear la espalda', 'Ir muy rapido', 'Apoyar los pies en el piso'],
        imageUrl: 'https://i.ytimg.com/vi/wkD8rjkodUI/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=russian+twist+proper+form',
        restSeconds: 45,
        dayId: 'day-2'
    },

    // --- Dia 3 ---
    {
        name: 'Back Extension',
        nameEs: 'Espinales en maquina (ESPINALES MAQUINA)',
        muscleGroup: 'Espinales, lumbar',
        sets: 3,
        reps: 10,
        description: 'En la maquina de extension lumbar con las almohadillas al frente y los pies bien apoyados. Cruza los brazos sobre el pecho. Baja el torso flexionando la cintura en 2 segundos. Subi hasta alinear el cuerpo sin hiperextender la espalda.',
        cues: ['Pies firmes en plataforma', 'Baja en 2 segundos', 'Subi hasta linea recta', 'No hiperextiendas hacia atras'],
        commonMistakes: ['Hiperextender la lumbar al subir', 'Usar impulso', 'Bajar muy rapido', 'No apoyar bien los pies'],
        imageUrl: 'https://i.ytimg.com/vi/ph3pddpKzzI/hqdefault.jpg',
        imageFallbackUrl: '/exercises/leg-press.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=back+extension+machine+form',
        restSeconds: 60,
        dayId: 'day-3'
    },
    {
        name: 'Bench Crunch',
        nameEs: 'Abdominales en banco (BANCO)',
        muscleGroup: 'Abdominales (recto abdominal)',
        sets: 4,
        reps: 10,
        description: 'Sentado en el banco de abdominales con los pies anclados bajo los rodillos. Brazos cruzados sobre el pecho. Baja el torso hacia atras sin llegar a tocar el banco. Subi contrayendo el abdomen hasta quedar a 45 grados.',
        cues: ['Baja en 2 segundos', 'No toques el banco abajo', 'Contrae abdomen al subir', 'Mirada al frente, no al techo'],
        commonMistakes: ['Bajar hasta quedar completamente acostado', 'Usar impulso para subir', 'Tirar del cuello', 'Hacer el movimiento demasiado rapido'],
        imageUrl: 'https://i.ytimg.com/vi/Xyd_faJPhuA/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=bench+crunch+abdominal+form',
        restSeconds: 45,
        dayId: 'day-3'
    },

    // --- Dia 4 ---
    {
        name: 'Oblique Leg Raise',
        nameEs: 'Oblicuos colchoneta por pierna (COLCHONETA OBLICUOS)',
        muscleGroup: 'Oblicuos, abdominales inferiores',
        sets: 4,
        reps: 8,
        description: 'Acostado de costado sobre la colchoneta con piernas extendidas y apiladas. Apoya la cabeza en el brazo de abajo. Eleva ambas piernas juntas hacia el costado contrayendo los oblicuos. Baja en control sin tocar el piso. 8 reps por lado.',
        cues: ['Piernas juntas y extendidas', 'Movimiento desde la cadera', 'Bajada sin tocar el piso', 'Contrae oblicuos al subir'],
        commonMistakes: ['Flexionar las rodillas', 'Usar impulso', 'Rotar la cadera hacia atras', 'Hacer el movimiento muy rapido'],
        imageUrl: 'https://i.ytimg.com/vi/wkD8rjkodUI/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=side+lying+leg+raise+oblique+form',
        restSeconds: 45,
        dayId: 'day-4'
    },
    {
        name: 'Superman',
        nameEs: 'Superman en colchoneta (SUPERMAN)',
        muscleGroup: 'Espinales, lumbar, gluteos',
        sets: 3,
        reps: 12,
        description: 'Boca abajo en la colchoneta con brazos extendidos hacia adelante y piernas extendidas. Eleva simultaneamente brazos, pecho y piernas unos centimetros del piso contrayendo la espalda baja. Mantene 1 segundo arriba y baja en control.',
        cues: ['Brazos y piernas extendidos', 'Eleva pecho y muslos del piso', 'Pausa 1s arriba', 'No hiperextiendas el cuello', 'Bajada controlada'],
        commonMistakes: ['Levantar demasiado (hiperextension)', 'Doblar brazos o piernas', 'Hacer el movimiento muy rapido', 'Tensionar el cuello mirando muy arriba'],
        imageUrl: 'https://i.ytimg.com/vi/z6PJMTdDaBU/hqdefault.jpg',
        imageFallbackUrl: '/exercises/plank.svg',
        videoUrl: 'https://www.youtube.com/results?search_query=superman+exercise+proper+form',
        restSeconds: 45,
        dayId: 'day-4'
    }
];
