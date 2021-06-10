import React from 'react'
import { Typography } from '@material-ui/core'

type Attributes = {
  /** mix of text and html */
  content: string
}

export type CoreParagraphProps = {
  /**
   * container for paragraph attributes
   */
  attributes: Attributes
  /** Variant style */
  name: 'core/paragraph'
}

export function CoreParagraph({ attributes }: CoreParagraphProps) {
  return (
    <Typography
      variant="body1"
      dangerouslySetInnerHTML={{ __html: attributes.content }}
      gutterBottom
    />
  )
}
