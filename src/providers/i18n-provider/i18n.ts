import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',
    nsSeparator: false,
    keySeparator: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
      useSuspense: false
    },
    backend: {
      crossDomain: true,
      loadPath: 'https://jesusfilm.github.io/Ark/locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18next
