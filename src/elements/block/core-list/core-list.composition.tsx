import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const ListBlock = () => (
  <Block
    {...blocks.filter((block) => block.__typename === 'CoreListBlock')[0]}
  />
)
