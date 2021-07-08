import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardSize: {
    height: '300px',
    margin: theme.spacing(3, 0)
  }
}))

type Attributes = {
  url: string
  providerNameSlug: string
}

export type IframeProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
}

export function Iframe({ attributes: { url, providerNameSlug } }: IframeProps) {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <CardMedia
        data-testid={providerNameSlug}
        className={classes.cardSize}
        component="iframe"
        src={url}
      />
    </Container>
  )
}
