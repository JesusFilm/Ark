import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const ImageBlock = () => (
  <Block
    {...blocks.filter((block) => block.__typename === 'CoreImageBlock')[0]}
  />
)
