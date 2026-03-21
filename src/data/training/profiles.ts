export const athleteProfile = {
    id: 'yo',
    label: 'Mi plan',
    personName: 'Pablo Ivan Lugo',
    age: 28,
    heightCm: 170,
    weightKg: 125,
    trainingDays: 3,
    sessionMinutes: 70,
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
