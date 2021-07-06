import React from 'react'
import { Block, BlockProps } from '.'
import { blocks } from './blockData'

export const Blocks = () => (
  <>
    {blocks.map((block, index) => (
      <Block key={index} {...block} />
    ))}
  </>
)

export const InvalidBlock = () => (
  <Block
    {...({
      __typename: 'CoreUnknownBlock'
    } as unknown as BlockProps)}
  />
)
