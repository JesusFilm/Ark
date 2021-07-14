import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  Container
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    color: theme.palette.primary.contrastText
  },
  box: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8)
  },
  boxOverlay: {
    background: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))',
    width: '100%',
    minHeight: '80vh'
  },
  grid: {
    maxWidth: 600
  }
}))

export type HeroProps = {
  /** Post title */
  title: string
  /** Post category */
  category?: string
  /** Post excerpt */
  excerpt?: string
  /** Image source url */
  src?: string
  /** Callback when button is clicked */
  onClick?: () => void
  /** Variant style */
  variant: 'hero'
}

export function Hero({ title, category, excerpt, src, onClick }: HeroProps) {
  const classes = useStyles()
  const { t } = useTranslation('post-card')

  return (
    <Box
      data-testid="heroVariant"
      className={classNames(src && classes.heroBackground)}
      style={src ? { backgroundImage: `url(${src})` } : {}}>
      <Box className={classNames(classes.box, src && classes.boxOverlay)}>
        <Container>
          <Grid
            container
            direction="column"
            spacing={2}
            className={classes.grid}>
            {category && (
              <Grid item>
                <Typography variant="h6">{category}</Typography>
              </Grid>
            )}
            <Grid item>
              <Typography variant="h2">{title}</Typography>
            </Grid>
            {excerpt && (
              <Grid item>
                <Typography>{excerpt}</Typography>
              </Grid>
            )}
            {onClick && (
              <Grid item>
                <Button
                  onClick={onClick}
                  variant="contained"
                  color="primary"
                  size="large">
                  {t('Read Story')}
                </Button>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
