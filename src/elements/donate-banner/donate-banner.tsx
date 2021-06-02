import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import React from 'react'
import Background from './assets/background.png'
import { JesusFilmSymbol } from '@jesus-film/ark.elements.jesus-film-symbol'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundImage: `linear-gradient(90.93deg, #EF3340 0.97%, #F25E29 100%), url(${Background})`,
    backgroundBlendMode: 'hard-light',
    backgroundRepeat: 'no-repeat, repeat',
    color: theme.palette.common.white
  },
  gridContainer: {
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      flexDirection: 'column',
      alignItems: 'stretch',
      padding: theme.spacing(5, 2)
    }
  },
  gridItemTypography: {
    flexGrow: 1
  },
  button: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main
  }
}))

export function DonateBanner() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Box className={classes.box} py={2}>
      <Container>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item>
            <JesusFilmSymbol variant="white" text height={40} />
          </Grid>
          <Grid item className={classes.gridItemTypography}>
            <Typography variant="h5" component="h2">
              {t('Reach People Digitally with the Hope of Jesus!')}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              size="large"
              variant="contained"
              className={classes.button}
              href="https://www.jesusfilm.org/how-to-help/ways-to-donate/give-now.html?amount=&frequency=single&campaign=NXWJPO&designation=2592320&thankYouRedirect=https:%2F%2Fwww.jesusfilm.org%2Fspecial%2Fthank-you.html"
              target="_blank"
              disableElevation
              fullWidth>
              {t('Donate')}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
