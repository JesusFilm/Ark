import React from 'react'
import { CompleteHero } from '@jesus-film/ark.elements.hero/hero.composition'
import { JesusFilmThemeProvider } from './jesus-film-theme-provider'

export const BasicJesusFilmThemeProvider = () => {
  return (
    <JesusFilmThemeProvider>
      <CompleteHero />
    </JesusFilmThemeProvider>
  )
}
