import React from 'react'
import { CoreParagraph } from '.'
import { blocks } from '../blockData'

export const ParagraphBlock = () => (
  <CoreParagraph
    {...blocks.filter((block) => block.name === 'core/paragraph')[0]}
  />
)
