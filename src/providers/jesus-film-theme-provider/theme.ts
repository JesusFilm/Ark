import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Source Sans Pro"', 'sans-serif'].join(','),
    button: {
      fontWeight: 700
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
    }
  }
})

export default theme
