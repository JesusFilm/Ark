import { Typography } from '@material-ui/core'
import React from 'react'
import { VokeThemeProvider } from './voke-theme-provider'

export const BasicVokeThemeProvider = () => {
  return (
    <VokeThemeProvider>
      <Typography>Hello World</Typography>
    </VokeThemeProvider>
  )
}
