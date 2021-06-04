import React, { useState } from 'react'
import { JesusFilmSymbol } from '@jesus-film/ark.elements.jesus-film-symbol'
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { JesusFilmGraphicSeal } from '@jesus-film/ark.elements.jesus-film-graphic-seal'
import classNames from 'classnames'
import Background from './assets/background.jpg'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  gridItemSymbol: {
    textAlign: 'center'
  },
  gridItemGraphicSymbol: {
    textAlign: 'right'
  },
  textField: {
    marginBottom: theme.spacing(2)
  },
  cardContent: {
    '&:last-child': {
      padding: theme.spacing(8, 5)
    }
  },
  cardContentBanner: {
    color: theme.palette.common.white,
    backgroundSize: 'cover'
  },
  inputBanner: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.common.white
    }
  },
  inputLabelBanner: {
    color: theme.palette.common.white,
    fontWeight: 'bold'
  },
  title: {
    fontWeight: 'bold'
  },
  subtitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
}))

const SubscribeSchema = yup.object({
  email: yup.string().email('Invalid email').required('Required')
})

export type SubscribeCardProps = {
  /**
   * a function to handle the user subscribing with a valid email to a newsletter.
   */
  onSubmit: (
    values: yup.InferType<typeof SubscribeSchema>,
    formikHelpers: FormikHelpers<yup.InferType<typeof SubscribeSchema>>
  ) => void | Promise<void>
  /**
   * choose the display of the card
   */
  variant?: 'default' | 'banner'
}

export function SubscribeCard({
  onSubmit,
  variant = 'default'
}: SubscribeCardProps) {
  const classes = useStyles()
  const [subscriberEmail, setSubscriberEmail] = useState<string | undefined>()
  const { t } = useTranslation('subscribe-card')
  return (
    <Container maxWidth={(variant === 'default' && 'xs') || undefined}>
      <Card variant="outlined">
        <CardContent
          className={classNames(
            classes.cardContent,
            variant === 'banner' && classes.cardContentBanner
          )}
          style={{
            backgroundImage: variant === 'banner' && `url(${Background})`
          }}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid xs={12} sm={variant === 'default' ? 12 : 5} item>
              <Grid container spacing={2} direction="column">
                {variant === 'default' ? (
                  <Grid item className={classes.gridItemSymbol}>
                    <JesusFilmSymbol text />
                  </Grid>
                ) : (
                  <Grid item>
                    <Typography className={classes.subtitle}>
                      {t('Everyone, Everywhere')}
                    </Typography>
                  </Grid>
                )}
                <Grid item>
                  <Typography variant="h3" className={classes.title}>
                    {t('Stories change lives')}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    {t(
                      "Join the Jesus Film Project's email newsletter to see how the story of Jesus changes everything."
                    )}
                  </Typography>
                </Grid>
                <Grid item>
                  {subscriberEmail ? (
                    <Alert severity="success" aria-label="Success">
                      {t("You've successfully subscribed:")}
                      <br />
                      <strong>{subscriberEmail}</strong>.
                    </Alert>
                  ) : (
                    <Formik
                      initialValues={{ email: '' }}
                      validationSchema={SubscribeSchema}
                      onSubmit={async (values, helper) => {
                        await onSubmit(values, helper)
                        setSubscriberEmail(values.email)
                      }}>
                      {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <TextField
                            inputProps={{ 'aria-label': 'Email' }}
                            label={t('Your Email Address')}
                            variant="outlined"
                            fullWidth
                            value={values.email}
                            onChange={handleChange('email')}
                            onBlur={handleBlur('email')}
                            className={classes.textField}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            disabled={isSubmitting}
                            InputProps={{
                              className: classNames(
                                variant === 'banner' && classes.inputBanner
                              )
                            }}
                            InputLabelProps={{
                              className: classNames(
                                variant === 'banner' && classes.inputLabelBanner
                              )
                            }}
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            disabled={isSubmitting}
                            type="submit">
                            {t('Subscribe')}
                          </Button>
                        </form>
                      )}
                    </Formik>
                  )}
                </Grid>
              </Grid>
            </Grid>
            {variant === 'banner' && (
              <Grid item className={classes.gridItemGraphicSymbol} sm={6}>
                <JesusFilmGraphicSeal variant="white" />
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}
