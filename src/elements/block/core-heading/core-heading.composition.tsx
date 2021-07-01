import React from 'react'
import { CoreHeading } from '.'
import { blocks } from '../blockData'

export const HeadingBlock = () => (
  <CoreHeading
    {...blocks.filter((block) => block.name === 'core/heading')[0]}
  />
)
