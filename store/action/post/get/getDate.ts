const months = [
    'styczeń',
    'luty',
    'marzec',
    'kwiecień',
    'maj',
    'czerwiec',
    'lipiec',
    'sierpień',
    'wrzesień',
    'październik',
    'listopad',
    'grudzień',
];

export function getMonthName(month: string) {
    const monthNumber = parseInt(month);

    return months[monthNumber - 1];
}

export function getDay(day: string) {
    return parseInt(day);
}
