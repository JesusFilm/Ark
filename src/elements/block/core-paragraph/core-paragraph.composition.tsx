import React from 'react'
import { CoreParagraph } from '.'
import { blocks } from '../blockData'
import { CoreParagraphProps } from './core-paragraph'

export const ParagraphBlock = () => (
  <CoreParagraph
    {...(blocks.filter(
      (block) => block.name === 'core/paragraph'
    )[0] as CoreParagraphProps)}
  />
)
