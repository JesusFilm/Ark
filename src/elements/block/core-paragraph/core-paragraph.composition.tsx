import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const ParagraphBlock = () => (
  <Block
    {...blocks.filter((block) => block.__typename === 'CoreParagraphBlock')[0]}
  />
)
