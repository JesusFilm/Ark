import React from 'react'
import { Container, Typography } from '@material-ui/core'

type Attributes = {
  /** mix of text and html */
  content?: string
}

export type CoreParagraphProps = {
  /**
   * container for paragraph attributes
   */
  attributes: Attributes
  __typename: 'CoreParagraphBlock'
}

export function CoreParagraph({ attributes: { content } }: CoreParagraphProps) {
  return content ? (
    <Container maxWidth="sm">
      <Typography
        data-testid="CoreParagraphBlock"
        variant="body1"
        dangerouslySetInnerHTML={{ __html: content }}
        paragraph
      />
    </Container>
  ) : null
}
