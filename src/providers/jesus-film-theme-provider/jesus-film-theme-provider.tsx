import React from 'react'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import theme from './theme'

export interface JesusFilmThemeProviderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const JesusFilmThemeProvider = ({
  children,
  ...rest
}: JesusFilmThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,700&family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {children}
    </ThemeProvider>
  )
}
