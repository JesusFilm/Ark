import React from 'react'
import { CoreImage } from '.'
import { blocks } from '../blockData'
import { CoreImageProps } from './core-image'

export const ImageBlock = () => (
  <CoreImage
    {...(blocks.filter(
      (block) => block.name === 'core/image'
    )[0] as CoreImageProps)}
  />
)
