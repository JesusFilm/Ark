import React from 'react'
import { HeroWithAction } from '@jesus-film/ark.elements.hero/hero.composition'
import { VokeThemeProvider } from './voke-theme-provider'

export const Hero = () => {
  return (
    <VokeThemeProvider>
      <HeroWithAction />
    </VokeThemeProvider>
  )
}
