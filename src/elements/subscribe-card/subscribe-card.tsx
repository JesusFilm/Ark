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

const useStyles = makeStyles((theme) => ({
  gridItemSymbol: {
    textAlign: 'center'
  },
  textField: {
    marginBottom: theme.spacing(2)
  },
  cardContent: {
    '&:last-child': {
      padding: theme.spacing(8, 5)
    }
  },
  title: {
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
}

export function SubscribeCard({ onSubmit }: SubscribeCardProps) {
  const classes = useStyles()
  const [subscriberEmail, setSubscriberEmail] = useState<string | undefined>()
  return (
    <Container maxWidth="xs">
      <Card variant="outlined">
        <CardContent className={classes.cardContent}>
          <Grid container spacing={5} direction="column">
            <Grid item className={classes.gridItemSymbol}>
              <JesusFilmSymbol text />
            </Grid>
            <Grid item>
              <Typography variant="h3" className={classes.title}>
                Stories change lives
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                Join the Jesus Film Project's email newsletter to see how the
                story of Jesus changes everything.
              </Typography>
            </Grid>
            <Grid item>
              {subscriberEmail ? (
                <Alert severity="success" aria-label="Success">
                  You've successfully subscribed: <br />
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
                    isSubmitting,
                    isValid
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        inputProps={{ 'aria-label': 'Email' }}
                        label="Your Email Address"
                        variant="outlined"
                        fullWidth
                        value={values.email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        className={classes.textField}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        disabled={isSubmitting}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        disabled={isSubmitting || !isValid}
                        type="submit">
                        Subscribe
                      </Button>
                    </form>
                  )}
                </Formik>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}
