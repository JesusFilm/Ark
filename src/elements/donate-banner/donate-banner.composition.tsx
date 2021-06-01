import React from 'react'
import { JesusFilmThemeProvider } from '../../providers/jesus-film-theme-provider'
import { DonateBanner } from './donate-banner'

export const BasicDonateBanner = () => (
  <JesusFilmThemeProvider>
    <DonateBanner />
  </JesusFilmThemeProvider>
)
