import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const EmbedBlock = () => (
  <Block
    {...blocks.filter((block) => block.__typename === 'CoreEmbedBlock')[0]}
  />
)
