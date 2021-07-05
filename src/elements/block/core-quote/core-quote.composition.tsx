import React from 'react'
import { CoreQuote } from '.'
import { blocks } from '../blockData'
import { CoreQuoteProps } from './core-quote'

export const QuoteBlock = () => (
  <CoreQuote
    {...(blocks.filter(
      (block) => block.name === 'core/quote'
    )[0] as CoreQuoteProps)}
  />
)
