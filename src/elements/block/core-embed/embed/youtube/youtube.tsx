import React from 'react'
import { Container, CardMedia } from '@material-ui/core'

type Attributes = {
  url: string
  providerNameSlug: string
}

export type YoutubeProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
  __typename: 'CoreEmbedBlock'
}

function extractVideoID(url): string {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  if (match && match[7].length === 11) {
    return match[7]
  }
  return null
}

export function Youtube({ attributes }: YoutubeProps) {
  return (
    <Container>
      <CardMedia
        data-testid="CoreEmbedBlock"
        component="iframe"
        src={`https://www.youtube.com/embed/${extractVideoID(attributes.url)}`}
      />
    </Container>
  )
}
