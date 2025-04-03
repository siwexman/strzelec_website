export type NameDutyType = {
    rank: string;
    name: string;
    phoneNumber: string;
    email: string;
};

// Dowódca
const commander: NameDutyType = {
    rank: 'DOWÓDCA JEDNOSTKI STRZELECKIEJ 2021',
    name: 'st. insp. ZS Barbara GAJEWSKA',
    phoneNumber: '607 995 335',
    email: 'barbragaj1@interia.pl',
};

// Zastępca Dowódcy
const firstAssistant: NameDutyType = {
    rank: 'ZASTĘPCA DOWÓDCY JEDNOSTKI STRZELECKIEJ 2021',
    name: 'insp. ZS Michał STOCERZ',
    phoneNumber: '505 034 088',
    email: 'teozy50@gmail.com',
};

// Zastępca Dowódcy
const secondAssistant: NameDutyType = {
    rank: 'ZASTĘPCA DOWÓDCY JEDNOSTKI STRZELECKIEJ 2021',
    name: 'insp. ZS Damian BIEŃKO',
    phoneNumber: '',
    email: 'dabienko@gmail.com',
};

// Dowódca Orląt
const commanderOrlat: NameDutyType = {
    rank: 'Dowódca Orląt ZS JEDNOSTKI STRZELECKIEJ 2021',
    name: 'insp. ZS Grzegorz GAJEWSKI',
    phoneNumber: '533 416 261',
    email: 'ggajewski53@gmail.com',
};

// Zastępca Dowódcy Orląt
const assistantOrlat: NameDutyType = {
    rank: 'Zastępca Dowódcy Orląt ZS JEDNOSTKI STRZELECKIEJ 2021',
    name: 'st. sierż. ZS Anna BATOR',
    phoneNumber: '795 507 061',
    email: 'annbator@interia.pl',
};

// Oficer ds. Mediów
const mediaOfficer: NameDutyType = {
    rank: 'OFICER DS. MEDIÓW  JEDNOSTKI STRZELECKIEJ 2021',
    name: 'insp. ZS Paweł REJMAN',
    phoneNumber: '509 264 673',
    email: 'boder111@interia.pl',
};

export const namesDuties = [
    commander,
    firstAssistant,
    secondAssistant,
    commanderOrlat,
    assistantOrlat,
    mediaOfficer,
];
