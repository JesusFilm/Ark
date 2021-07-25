import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'
import { Error } from '../../../error'
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

function extractVimeoId(url): string {
  const regExp =
    /^.*((vimeo.com\/)|(v\/)|(\/u\/\w\/)|(video\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url?.match(regExp)

  if (match && match[7]) {
    return match[7]
  }
}

export function Vimeo({
  attributes: { url, align, providerNameSlug }
}: CoreEmbedProps) {
  const classes = useStyles()
  const vimeoId = extractVimeoId(url)
  const vimeoUrl = `https://player.vimeo.com/video/${vimeoId}`

  if (!url && !align && !providerNameSlug) {
    return null
  } else if (vimeoId === undefined) {
    return <Error title="This is not a valid vimeo url" subtitle={url} />
  } else {
    return (
      <Container maxWidth={align === 'wide' ? 'lg' : 'sm'}>
        <CardMedia
          data-testid={providerNameSlug}
          className={align === 'wide' ? classes.mediumSize : classes.smallSize}
          component="iframe"
          src={vimeoUrl}
        />
      </Container>
    )
  }
}
