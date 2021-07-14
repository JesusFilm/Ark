import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'
import { Error } from '../../../error'

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

export type YoutubeProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
}

function extractYoutubeID(url): string {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  if (match && match[7].length === 11) {
    return match[7]
  }
}

export function Youtube({ attributes }: YoutubeProps) {
  const classes = useStyles()
  const youtubeId = extractYoutubeID(attributes.url)
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`

  if (youtubeId === undefined) {
    return (
      <Error
        title="This is not a valid youtube url"
        subtitle={attributes.url}
      />
    )
  } else {
    return (
      <Container maxWidth={attributes.align === 'wide' ? 'md' : 'sm'}>
        <CardMedia
          data-testid={attributes.providerNameSlug}
          className={
            attributes.align === 'wide' ? classes.mediumSize : classes.smallSize
          }
          component="iframe"
          hidden
          src={youtubeUrl}
        />
      </Container>
    )
  }
}
