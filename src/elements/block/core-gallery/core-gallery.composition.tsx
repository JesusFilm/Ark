import React from 'react'
import { CoreGallery } from '.'
import { blocks } from '../blockData'
import { CoreGalleryProps } from './core-gallery'

export const GalleryBlock = () => (
  <CoreGallery
    {...(blocks.filter(
      (block) => block.name === 'core/gallery'
    )[0] as CoreGalleryProps)}
  />
)
