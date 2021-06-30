import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'

type Attributes = {
  /** */
  value: string
  citation: string
}

export type CoreQuoteProps = {
  /**
   * container for quote attributes
   */
  attributes: Attributes
  /** Variant Style */
  name: 'core/quote'
}

export function CoreQuote({ attributes }: CoreQuoteProps) {
  return (
    // TODO: make it look closer to the figma quote
    <Box>
      <Container>
        <Box pt={2}>
          <Typography
            data-testid="quoteVariant"
            dangerouslySetInnerHTML={{
              __html: attributes.value
            }}
            variant="h5"
          />
        </Box>
        <Box pt={1.5} pb={1}>
          <Typography
            data-testid="citation"
            dangerouslySetInnerHTML={{ __html: attributes.citation }}
            variant="body1"
          />
        </Box>
      </Container>
    </Box>
  )
}
