import React from 'react'
import { Container, Typography, Divider } from '@material-ui/core'
import Red from './assets/red.png'

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
    <Container>
      <Divider />
      <img src={Red} height={15} width={20} />
      <Typography
        data-testid="quoteVariant"
        dangerouslySetInnerHTML={{
          __html: attributes.value
        }}
        variant="h5"
      />
      <Typography
        data-testid="citation"
        dangerouslySetInnerHTML={{ __html: attributes.citation }}
        variant="body1"
      />
      <img src={Red} height={15} width={20} />
      <Divider />
    </Container>
  )
}
