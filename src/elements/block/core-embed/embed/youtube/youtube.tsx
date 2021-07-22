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

function extractYoutubeID(url): string {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url?.match(regExp)
  if (match && match[7].length === 11) {
    return match[7]
  }
}

export function Youtube({
  attributes: { url, align, providerNameSlug }
}: CoreEmbedProps) {
  const classes = useStyles()
  const youtubeId = extractYoutubeID(url)
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`

  if (!url && !align && !providerNameSlug) {
    return null
  } else if (youtubeId === undefined) {
    return <Error title="This is not a valid youtube url" subtitle={url} />
  } else {
    return (
      <Container maxWidth={align === 'wide' ? 'md' : 'sm'}>
        <CardMedia
          data-testid={providerNameSlug}
          className={align === 'wide' ? classes.mediumSize : classes.smallSize}
          component="iframe"
          hidden
          src={youtubeUrl}
        />
      </Container>
    )
  }
}
