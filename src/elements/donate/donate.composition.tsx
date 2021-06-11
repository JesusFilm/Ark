import React from 'react'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'
import { Donate } from './donate'

export const BasicDonate = () => (
  <JesusFilmThemeProvider>
    <Donate />
  </JesusFilmThemeProvider>
)
export const ButtonDonate = () => (
  <JesusFilmThemeProvider>
    <Donate variant="button" />
  </JesusFilmThemeProvider>
)
