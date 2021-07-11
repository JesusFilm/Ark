import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'
import { Error } from '../error'

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

  switch (youtubeId) {
    case undefined:
      return (
        <Error
          attributes={attributes}
          title="This is not a valid youtube url"
          subtitle={youtubeUrl}
        />
      )
    default:
      return (
        <Container maxWidth="sm">
          <CardMedia
            data-testid={attributes.providerNameSlug}
            className={classes.cardSize}
            component="iframe"
            hidden
            src={youtubeUrl}
          />
        </Container>
      )
  }
}
