import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Source Sans Pro"',
      'sans-serif'
    ].join(','),
    button: {
      fontWeight: 700
    }
  },
  palette: {
    primary: {
      main: '#ce2a31'
    },
    background: {
      paper: '#fcfbf9',
      default: '#f0ede3'
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
