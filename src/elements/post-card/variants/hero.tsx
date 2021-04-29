import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  Container
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    color: theme.palette.primary.contrastText
  },
  heroDarken: {
    background: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))',
    width: '100%',
    minHeight: '80vh',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8)
  }
}))

export type HeroProps = {
  /** post title */
  title: string;
  /** post category */
  category?: string;
  /** post excerpt */
  excerpt?: string;
  /** Image source url */
  src?: string;
  /** Callback when button is clicked */
  onClick?: () => void;
  /** Variant Style */
  style: 'hero'
};

export function Hero ({
  title,
  category,
  excerpt,
  src,
  onClick
}: HeroProps) {
  const classes = useStyles()

  return (
    <Box
      className={src ? classes.heroBackground : ''}
      style={src ? { backgroundImage: `url(${src})` } : {}}
    >
      <Box className={src ? classes.heroDarken : ''}>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="flex-start"
          spacing={2}
        >
          <Grid
            item
            sm={12}
            md={9}
            lg={6}
            spacing={2}
          >
            <Container maxWidth="sm">
              <Grid
                container
                direction="row"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="h5">{category}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h2">{title}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{excerpt}</Typography>
                </Grid>
                {onClick && (
                  <Grid item>
                    <Button
                      onClick={() => onClick?.()}
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Read Story
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
