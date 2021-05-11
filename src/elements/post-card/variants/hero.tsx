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
  },
  noImage: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8)
  }
}))

export type HeroProps = {
  /** Post title */
  title: string;
  /** Post category */
  category?: string;
  /** Post excerpt */
  excerpt?: string;
  /** Image source url */
  src?: string;
  /** Callback when button is clicked */
  onClick?: () => void;
  /** Text of button */
  buttonText?: string;
  /** Variant style */
  variant: 'hero'
};

export function Hero ({
  title,
  category,
  excerpt,
  src,
  onClick,
  buttonText = 'Read Story'
}: HeroProps) {
  const classes = useStyles()

  return (
    <Box
      data-testid="heroVariantBackground"
      className={src ? classes.heroBackground : classes.noImage}
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
          >
            <Container maxWidth="sm">
              <Grid
                container
                direction="row"
                alignItems="center"
                spacing={2}
              >
                {category &&
                  <Grid item>
                    <Typography variant="h5">{category}</Typography>
                  </Grid>
                }
                <Grid item>
                  <Typography variant="h2">{title}</Typography>
                </Grid>
                {excerpt &&
                  <Grid item>
                    <Typography variant="body1">{excerpt}</Typography>
                  </Grid>
                }
                {onClick && (
                  <Grid item>
                    <Button
                      onClick={onClick}
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      {buttonText}
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
