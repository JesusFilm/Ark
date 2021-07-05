import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const GalleryBlock = () => (
  <Block {...blocks.filter((block) => block.name === 'core/gallery')[0]} />
)
