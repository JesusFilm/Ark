import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const QuoteBlock = () => (
  <Block
    {...blocks.filter((block) => block.__typename === 'CoreQuoteBlock')[0]}
  />
)
