import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { intlFormat, parseISO } from 'date-fns'

export const format = (value: string, fmt: string, lng: string) => {
  if (fmt === 'date' && value) {
    return intlFormat(
      parseISO(value),
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      {
        locale: lng
      }
    )
  }
  return value
}

i18next
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',
    nsSeparator: false,
    keySeparator: false,
    fallbackLng: 'en',
    react: {
      useSuspense: false
    },
    backend: {
      crossDomain: true,
      loadPath: 'https://jesusfilm.github.io/Ark/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      format,
      escapeValue: false
    }
  })

export default i18next
