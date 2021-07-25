import React from 'react'
import { Error } from '../error'
import { Youtube } from './embed/youtube'
import { Vimeo } from './embed/vimeo'
import { Iframe } from './embed/iframe'

type Attributes = {
  url?: string
  providerNameSlug?: string
  align?: string
}

export type CoreEmbedProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
  __typename: 'CoreEmbedBlock'
}

export function CoreEmbed(props: CoreEmbedProps) {
  if (
    props.attributes.url ||
    props.attributes.providerNameSlug ||
    props.attributes.align
  ) {
    switch (props.attributes.providerNameSlug) {
      case 'embed-handler':
        return <Iframe {...props} />
      case 'youtube':
        return <Youtube {...props} />
      case 'vimeo':
        return <Vimeo {...props} />
      default:
        return (
          <Error
            title="This type of embed is currently unsupported"
            subtitle={props.attributes.providerNameSlug}
          />
        )
    }
  } else {
    return null
  }
}
