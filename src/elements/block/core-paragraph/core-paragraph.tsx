import React from 'react'
import { Container, Typography } from '@material-ui/core'

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

export function CoreParagraph({ name, attributes }: CoreParagraphProps) {
  return (
    <Container>
      <Typography
        data-testid={name}
        variant="body1"
        dangerouslySetInnerHTML={{ __html: attributes.content }}
        paragraph
      />
    </Container>
  )
}
