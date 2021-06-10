import React from 'react'
import { Block } from './block'
import { blocks } from './blockData'

export const ParagraphBlock = () => (
  <Block {...blocks.filter((block) => block.name === 'core/paragraph')[0]} />
)
export const ImageBlock = () => (
  <Block {...blocks.filter((block) => block.name === 'core/image')[0]} />
)
export const HeadingBlock = () => (
  <Block {...blocks.filter((block) => block.name === 'core/heading')[0]} />
)
export const ListBlock = () => (
  <Block {...blocks.filter((block) => block.name === 'core/list')[0]} />
)

export const GalleryBlock = () => (
  <Block {...blocks.filter((block) => block.name === 'core/gallery')[0]} />
)
