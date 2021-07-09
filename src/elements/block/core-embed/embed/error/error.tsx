import React from 'react'
import {
  Card,
  CardContent,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardSize: {
    height: '100px',
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
      <Card className={classes.cardSize} data-testid={providerNameSlug}>
        <CardContent>
          <Typography variant="h6" component="h2">
            This is not a valid {title} url
            <Typography color="textSecondary">{subtitle}</Typography>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
