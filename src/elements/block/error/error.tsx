import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  alertSize: {
    height: '70px',
    margin: theme.spacing(3, 0)
  }
}))

export type ErrorProps = {
  title: string
  subtitle: string
}

export function Error({ title, subtitle }: ErrorProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Alert severity="error" className={classes.alertSize}>
        <AlertTitle>{title}</AlertTitle>
        <strong>{subtitle}</strong>
      </Alert>
    </Container>
  )
}
