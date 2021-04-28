import { Typography } from '@material-ui/core'
import React from 'react'
import { JesusFilmThemeProvider } from './jesus-film-theme-provider'

export const BasicJesusFilmThemeProvider = () => {
  return (
    <JesusFilmThemeProvider>
      <Typography>Hello World</Typography>
    </JesusFilmThemeProvider>
  )
}
