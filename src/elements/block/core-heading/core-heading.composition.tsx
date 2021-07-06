import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const HeadingBlock = () => (
  <Block
    {...blocks.filter((block) => block.__typename === 'CoreHeadingBlock')[0]}
  />
)
