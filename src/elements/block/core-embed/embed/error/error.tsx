import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  alertSize: {
    height: '70px',
    margin: theme.spacing(3, 0)
  }
}))

type Attributes = {
  providerNameSlug: string
}

export type ErrorProps = {
  attributes: Attributes
  title: string
  subtitle: string
}

export function Error({
  attributes: { providerNameSlug },
  title,
  subtitle
}: ErrorProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Alert
        severity="error"
        className={classes.alertSize}
        data-testid={providerNameSlug}>
        <AlertTitle>{title}</AlertTitle>
        <strong>{subtitle}</strong>
      </Alert>
    </Container>
  )
}
