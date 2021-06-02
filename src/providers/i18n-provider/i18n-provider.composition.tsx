import React, { ReactElement } from 'react'
import { I18nProvider } from './i18n-provider'
import { useTranslation } from 'react-i18next'
import { Box, Button, Grid, Typography } from '@material-ui/core'

function Consumer(): ReactElement {
  const { t, i18n } = useTranslation()

  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Box m={2}>
      <Grid container spacing={2} direction="row">
        <Grid item>
          <Button variant="contained" onClick={() => handleClick('en')}>
            English
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleClick('de')}>
            German
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleClick('fr')}>
            French
          </Button>
        </Grid>
      </Grid>
      <Box my={2}>
        <Typography variant="h5">
          {t('When people encounter Jesus, everything changes')}
        </Typography>
        <Typography variant="h6">
          {t('We want everyone, everywhere to encounter Jesus')}
        </Typography>
      </Box>
    </Box>
  )
}

export const BasicI18nProvider = () => (
  <I18nProvider>
    <Consumer />
  </I18nProvider>
)
