import React, { ReactElement, ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

export interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps): ReactElement {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
