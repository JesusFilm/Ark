import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const GalleryBlock = () => (
  <Block
    {...blocks.filter((block) => block.__typename === 'CoreGalleryBlock')[0]}
  />
)
