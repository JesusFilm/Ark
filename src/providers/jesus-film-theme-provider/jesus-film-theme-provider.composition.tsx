import React from 'react'
import { HeroWithAction } from '@jesus-film/ark.elements.hero/hero.composition'
import { JesusFilmThemeProvider } from './jesus-film-theme-provider'

export const Hero = () => {
  return (
    <JesusFilmThemeProvider>
      <HeroWithAction />
    </JesusFilmThemeProvider>
  )
}
