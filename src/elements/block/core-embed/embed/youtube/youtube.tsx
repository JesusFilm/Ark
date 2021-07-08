import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'
import { Default } from '../default'

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
  const youtubeUrl = extractYoutubeID(attributes.url)

  switch (youtubeUrl) {
    case undefined:
      return <Default attributes={attributes} />
    default:
      return (
        <Container maxWidth="sm">
          <CardMedia
            data-testid={attributes.providerNameSlug}
            className={classes.cardSize}
            component="iframe"
            hidden
            src={`https://www.youtube.com/embed/${youtubeUrl}`}
          />
        </Container>
      )
  }
}
