import React from 'react'
import { Container, CardMedia } from '@material-ui/core'

type Attributes = {
  url: string
  providerNameSlug: string
}

export type VimeoProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
  __typename: 'CoreEmbedBlock'
}

export function Vimeo({ attributes }: VimeoProps) {
  // embed url works
  // need to regex the original url
  return (
    <Container>
      <CardMedia
        data-testid="CoreEmbedBlock"
        component="iframe"
        src={attributes.url}
      />
    </Container>
  )
}
