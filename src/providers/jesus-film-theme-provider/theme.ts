import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Noto Serif"', 'serif'].join(','),
    button: {
      fontWeight: 700,
      fontFamily: ['"Source Sans Pro"', 'sans-serif'].join(',')
    }
  },
  palette: {
    primary: {
      main: '#EF3340'
    },
    background: {
      paper: '#FFFFFF',
      default: '#F0EDE3'
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
