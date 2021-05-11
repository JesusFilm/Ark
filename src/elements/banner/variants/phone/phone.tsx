import { Box, createStyles, makeStyles, Typography, useTheme, useMediaQuery, Container } from '@material-ui/core'
import React from 'react'
import frame from './assets/frame.svg'
import appleButton from './assets/appleButton.svg'
import googleButton from './assets/googleButton.png'

export type PhoneProps = {
  /** a text to be rendered in the component as the title. */
  title: string
  /** a text to be rendered in the component as the description. */
  description: string
  /** a text of the source of the image to be rendered in as the background image. */
  backgroundSrc: string
  /** a text to be rendered in the component as the footer. */
  footer: string
  /** a text to set the variant. */
  variant: 'phone'
  /** a text of the source of the image to be rendered in as frame of the phone */
  frameImgSrc: string
  /** a text of the source for the app on the ios app store */
  iosAppStoreHref?: string
  /** a text of the source of the app on the android app store */
  androidAppStoreHref?: string
};

const useStyles = makeStyles((theme) =>
  createStyles({
    backgroundImg: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      wdith: '100%',
      height: '100%'
    },
    container: {
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    frame: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: 534,
      height: 266,
      padding: '14px 58px 12px 52px',
      [theme.breakpoints.down('sm')]: {
        width: 300,
        height: 146,
        padding: '8px 35px 5px 31px'
      }
    },
    frameImg: {
      display: 'flex',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius: 3
    },
    descPadding: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(35),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(10)
      }
    },
    button: {
      height: 47
    },
    appleButton: {
      padding: 7
    },
    box: {
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(10, 0)
    }
  })
)

export function Phone ({ title, description, backgroundSrc, footer, frameImgSrc, iosAppStoreHref, androidAppStoreHref }: PhoneProps) {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.box}>
      <Container className={classes.container} maxWidth="md" style={ { backgroundImage: `url(${backgroundSrc})` } }>
        <Container maxWidth="sm">
        <Typography variant={matches ? 'h5' : 'h4'} style={{ fontWeight: 'bold' }}gutterBottom>{title}</Typography>
        </Container>
        <Container maxWidth="xs">
        <Typography variant="body2" className={classes.descPadding}>{description}</Typography>
        </Container>
        <div className={classes.frame} style={ { backgroundImage: `url(${frame})` } }>
          <div className={classes.frameImg} style={ { backgroundImage: `url(${frameImgSrc})` } } />
        </div>
        <Box pt={2}>
          {androidAppStoreHref && <a href={androidAppStoreHref}>
            <img className={classes.button} src={googleButton} alt='google button' />
          </a>}
          {iosAppStoreHref && <a href={iosAppStoreHref}>
            <img className={[classes.button, classes.appleButton].join(' ')} src={appleButton} alt='apple button'/>
          </a>}
        </Box>
        <Typography style={{ fontWeight: 'bold' }} variant={matches ? 'h4' : 'h3'} color="primary">{footer}</Typography>
      </Container>
    </Box>
  )
}
