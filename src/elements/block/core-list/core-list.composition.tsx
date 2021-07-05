import React from 'react'
import { Block } from '..'
import { blocks } from '../blockData'

export const ListBlock = () => (
  <Block {...blocks.filter((block) => block.name === 'core/list')[0]} />
)
