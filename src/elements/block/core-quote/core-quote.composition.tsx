import React from 'react'
import { CoreQuote } from '.'
import { blocks } from '../blockData'

export const QuoteBlock = () => (
  <CoreQuote {...blocks.filter((block) => block.name === 'core/quote')[0]} />
)
