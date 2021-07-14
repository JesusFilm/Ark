import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'

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

type Attributes = {
  url: string
  providerNameSlug: string
  align: string
}

export type IframeProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
}

export function Iframe({
  attributes: { url, providerNameSlug, align }
}: IframeProps) {
  const classes = useStyles()

  return (
    <Container maxWidth={align === 'wide' ? 'md' : 'sm'}>
      <CardMedia
        data-testid={providerNameSlug}
        className={align === 'wide' ? classes.mediumSize : classes.smallSize}
        component="iframe"
        src={url}
      />
    </Container>
  )
}
