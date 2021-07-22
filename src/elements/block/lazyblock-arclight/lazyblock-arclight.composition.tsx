import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const BasicCoreArclight = () => (
  <Block
    {...blocks.filter(
      (block) => block.__typename === 'LazyblockArclightBlock'
    )[0]}
  />
)
