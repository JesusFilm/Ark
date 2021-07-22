import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'
import { CoreEmbedProps } from '../../core-embed'

const useStyles = makeStyles((theme) => ({
  smallSize: {
    height: '300px',
    margin: theme.spacing(3, 0)
  },
  mediumSize: {
    height: '500px',
    margin: theme.spacing(3, 0)
  }
}))

export function Iframe({
  attributes: { url, providerNameSlug, align }
}: CoreEmbedProps) {
  const classes = useStyles()

  return url || providerNameSlug || align ? (
    <Container maxWidth={align === 'wide' ? 'md' : 'sm'}>
      <CardMedia
        data-testid={providerNameSlug}
        className={align === 'wide' ? classes.mediumSize : classes.smallSize}
        component="iframe"
        src={url}
      />
    </Container>
  ) : null
}
