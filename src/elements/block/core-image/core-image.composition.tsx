import React from 'react'
import { CoreImage } from '.'
import { blocks } from '../blockData'

export const ImageBlock = () => (
  <CoreImage {...blocks.filter((block) => block.name === 'core/image')[0]} />
)
