import React from 'react'
import { CoreGallery } from '.'
import { blocks } from '../blockData'

export const GalleryBlock = () => (
  <CoreGallery
    {...blocks.filter((block) => block.name === 'core/gallery')[0]}
  />
)
