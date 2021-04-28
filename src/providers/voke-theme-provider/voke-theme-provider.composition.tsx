import React from 'react'
import { CompleteHero } from '@jesus-film/ark.elements.hero/hero.composition'
import { VokeThemeProvider } from './voke-theme-provider'

export const BasicVokeThemeProvider = () => {
  return (
    <VokeThemeProvider>
      <CompleteHero />
    </VokeThemeProvider>
  )
}
