import React from 'react'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'
import { Mission } from './mission'

export const BasicMission = () => (
  <JesusFilmThemeProvider>
    <Mission />
  </JesusFilmThemeProvider>
)
