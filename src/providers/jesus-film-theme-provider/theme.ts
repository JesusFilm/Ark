import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Noto Serif"', 'serif'].join(','),
    button: {
      fontWeight: 700,
      fontFamily: ['"Source Sans Pro"', 'sans-serif'].join(',')
    },
    h6: {
      fontSize: 16,
      fontWeight: 700,
      fontFamily: ['"Source Sans Pro"', 'sans-serif'].join(','),
      textTransform: 'uppercase'
    }
  },
  palette: {
    primary: {
      main: '#EF3340'
    },
    text: {
      primary: '#4D4D4D',
      secondary: '#828282'
    }
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: 0
      }
    },
    MuiButton: {
      root: {
        borderRadius: 0
      }
    }
  }
})

export default theme
