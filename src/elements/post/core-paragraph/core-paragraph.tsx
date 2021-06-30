import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'

export type CoreParagraphProps = {
  /**
   * Paragraph blocks to be rendered in the component.
   */
  blocks: {
    __typename: 'CoreParagraphBlock'
    attributes: {
      content: string
    }
  }
}

export function CoreParagraph({ blocks }: CoreParagraphProps) {
  return (
    <Box>
      <Container
        maxWidth="sm"
        style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Typography variant="body1">{blocks.attributes.content}</Typography>
      </Container>
    </Box>
  )
}
