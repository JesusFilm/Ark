import {
  Box,
  createStyles,
  makeStyles,
  Typography,
  Container,
  Grid
} from '@material-ui/core'
import React, { ReactNode } from 'react'
import phone from './assets/phone.svg'
import appleButton from './assets/apple-button.svg'
import googleButton from './assets/google-button.svg'

export type BannerProps = {
  /** a text to be rendered in the component as the title. */
  title: string
  /** a text to be rendered in the component as the description. */
  description: string
  /** a text to be rendered in the component as the footer. */
  footer: string
  /** a text of the source of the image to be rendered in as the background image. */
  backgroundSrc: string
  /** reactNode that have content entered in. */
  children?: ReactNode
  /** a text of the source of the image to be rendered in as phone of the phone */
  phoneImgSrc?: string
  /** a URL to redirect the user to when clicking on the Apple iOS App Store Button */
  appleAppStoreHref?: string
  /** a URL to redirect the user to when clicking on the Google Play App Store Button */
  googleAppStoreHref?: string
}

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      padding: theme.spacing(10, 0)
    },
    phone: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundImage: `url(${phone})`,
      overflow: 'hidden',
      height: 0,
      paddingTop: '49.19%',
      position: 'relative'
    },
    phoneImg: {
      position: 'absolute',
      top: '5.8%',
      left: '10.2%',
      bottom: '5%',
      right: '11.4%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius: 3
    },
    button: {
      height: 60
    },
    box: {
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper
    }
  })
)

export function Banner({
  title,
  description,
  backgroundSrc,
  footer,
  children,
  phoneImgSrc,
  appleAppStoreHref,
  googleAppStoreHref
}: BannerProps) {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Container
        maxWidth="lg"
        className={classes.container}
        style={{ backgroundImage: `url(${backgroundSrc})` }}
        data-testid="bannerContainer">
        <Container maxWidth="md">
          <Box py={2}>
            <Typography variant="h3" style={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Box>
          <Box py={2}>
            <Container maxWidth="xs">
              <Typography variant="h6">{description}</Typography>
            </Container>
          </Box>
          {children && <Box py={2}>{children}</Box>}
          {phoneImgSrc && (
            <Box py={2}>
              <Box>
                <Box className={classes.phone}>
                  <Box
                    className={classes.phoneImg}
                    style={{ backgroundImage: `url(${phoneImgSrc})` }}
                    data-testid="bannerPhoneWithCustomImage"
                  />
                </Box>
              </Box>
            </Box>
          )}
          {(googleAppStoreHref || appleAppStoreHref) && (
            <Box py={2}>
              <Grid container spacing={2} justify="center">
                {googleAppStoreHref && (
                  <Grid item>
                    <a href={googleAppStoreHref}>
                      <img
                        className={classes.button}
                        src={googleButton}
                        alt="google button"
                      />
                    </a>
                  </Grid>
                )}
                {appleAppStoreHref && (
                  <Grid item>
                    <a href={appleAppStoreHref}>
                      <img
                        className={classes.button}
                        src={appleButton}
                        alt="apple button"
                      />
                    </a>
                  </Grid>
                )}
              </Grid>
            </Box>
          )}
          <Box py={2}>
            <Typography
              style={{ fontWeight: 'bold' }}
              variant="h2"
              color="primary">
              {footer}
            </Typography>
          </Box>
        </Container>
      </Container>
    </Box>
  )
}
