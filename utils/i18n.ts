import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const translations = {
    en: require('../locales/en.json'),
    fr: require('../locales/fr.json'),
    de: require('../locales/de.json'),
    it: require('../locales/it.json'),
    pt: require('../locales/pt.json'),
    ru: require('../locales/ru.json'),
    es: require('../locales/es.json'),
}

i18next
    .use(initReactI18next)
    .init({
        lng: 'en',
        resources: translations,
        react: {
            useSuspense: false
        },
        returnNull: false
    });

export default i18next;