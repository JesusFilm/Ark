import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'

export type CoreParagraphProps = {
  /**
   * Paragraph blocks to be rendered in the component.
   */
  block: {
    __typename: 'CoreParagraphBlock'
    attributes: {
      content: string
    }
  }
}

export function CoreParagraph({ block }: CoreParagraphProps) {
  return (
    <Box>
      <Container
        maxWidth="sm"
        style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Typography variant="body1">{block.attributes.content}</Typography>
      </Container>
    </Box>
  )
}
