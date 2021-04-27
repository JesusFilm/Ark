import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { Helmet } from 'react-helmet'
import theme from './theme'

export interface VokeThemeProviderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const VokeThemeProvider = ({
  children,
  ...rest
}: VokeThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </ThemeProvider>
  )
}
