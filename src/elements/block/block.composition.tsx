import React from 'react'
import { Block } from '.'
import { blocks } from './blockData'

export const Blocks = () => (
  <>
    {blocks.map((block, index) => (
      <Block key={index} {...block} />
    ))}
  </>
)
