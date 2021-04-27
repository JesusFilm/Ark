import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Titillium Web"',
      'sans-serif'
    ].join(','),
    button: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700
    }
  },
  palette: {
    primary: {
      main: '#44C8E8',
      contrastText: '#fff'
    },
    secondary: {
      main: '#fa8232'
    },
    background: {
      paper: '#fcfbf9',
      default: 'rgba(148, 188, 217, 0.1)'
    }
  },
  overrides: {
    MuiCard: {
      root: {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
        borderRadius: 15
      }
    }
  }
})

export default theme
