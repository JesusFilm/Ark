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
  url: string
  providerNameSlug: string
}

export type DefaultProps = {
  attributes: Attributes
}

export function Default({
  attributes: { url, providerNameSlug }
}: DefaultProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Card className={classes.cardSize} data-testid={providerNameSlug}>
        <CardContent>
          <Typography variant="h6" component="h2">
            This embed type is currently unsupported.
          </Typography>
          <Typography color="textSecondary">{providerNameSlug}</Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
