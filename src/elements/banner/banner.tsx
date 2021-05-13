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
  /** title as string or component (strings are wrapped in Typography component) */
  title: ReactNode
  /** description as string or component (strings are wrapped in Typography component) */
  description: ReactNode
  /** footer as string or component (strings are wrapped in Typography component) */
  footer: ReactNode
  /** background image URL. */
  backgroundSrc: string
  /** amount of padding around children. */
  py?: number
  /** content for center of banner */
  children?: ReactNode
  /** phone screen image URL */
  phoneImgSrc?: string
  /** a URL to redirect the user to when clicking on the Apple iOS App Store Bbtton */
  appleAppStoreHref?: string
  /** a URL to redirect the user to when clicking on the Google Play App Store button */
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
  py,
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
            {typeof title === 'string' ? (
              <Typography variant="h3" style={{ fontWeight: 'bold' }}>
                {title}
              </Typography>
            ) : (
              title
            )}
          </Box>
          <Box py={2}>
            <Container maxWidth="xs">
              {typeof description === 'string' ? (
                <Typography variant="h6">{description}</Typography>
              ) : (
                description
              )}
            </Container>
          </Box>
          {(children || py) && <Box py={py}>{children}</Box>}
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
                    <a
                      href={googleAppStoreHref}
                      target="_blank"
                      rel="noopener noreferrer">
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
                    <a
                      href={appleAppStoreHref}
                      target="_blank"
                      rel="noopener noreferrer">
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
            {typeof footer === 'string' ? (
              <Typography
                style={{ fontWeight: 'bold' }}
                variant="h2"
                color="primary">
                {footer}
              </Typography>
            ) : (
              footer
            )}
          </Box>
        </Container>
      </Container>
    </Box>
  )
}
