import React from 'react'
import { Error } from '../error'
import { Youtube } from './embed/youtube'
import { Vimeo } from './embed/vimeo'
import { Iframe } from './embed/iframe'

type Attributes = {
  url: string
  providerNameSlug: string
  align: string
}

export type CoreEmbedProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
  __typename: 'CoreEmbedBlock'
}

export function CoreEmbed({ attributes }: CoreEmbedProps) {
  switch (attributes.providerNameSlug) {
    case 'embed-handler':
      return <Iframe attributes={attributes} />
    case 'youtube':
      return <Youtube attributes={attributes} />
    case 'vimeo':
      return <Vimeo attributes={attributes} />
    default:
      return (
        <Error
          title="This type of embed is currently unsupported"
          subtitle={attributes.providerNameSlug}
        />
      )
  }
}
