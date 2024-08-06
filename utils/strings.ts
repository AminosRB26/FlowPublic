export const languageToLocale = (language: string) => {
    switch (language.toLowerCase()) {
        case 'english':
            return 'en';
        case 'spanish':
            return 'es';
        case 'german':
            return 'de';
        case 'french':
            return 'fr';
        case 'russian':
            return 'ru';
        case 'italian':
            return 'it';
        case 'portuguese':
            return 'pt';
        default:
            return 'en';
    }
}

export const formatDateToDDMMYYYY = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${day}/${month}/${year}`;
}