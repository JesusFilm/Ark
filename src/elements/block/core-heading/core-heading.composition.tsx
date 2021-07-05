import React from 'react'
import { CoreHeading } from '.'
import { blocks } from '../blockData'
import { CoreHeadingProps } from './core-heading'

export const HeadingBlock = () => (
  <CoreHeading
    {...(blocks.filter(
      (block) => block.name === 'core/heading'
    )[0] as CoreHeadingProps)}
  />
)
