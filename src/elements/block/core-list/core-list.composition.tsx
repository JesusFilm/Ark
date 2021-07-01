import React from 'react'
import { CoreList } from '.'
import { blocks } from '../blockData'

export const ListBlock = () => (
  <CoreList {...blocks.filter((block) => block.name === 'core/list')[0]} />
)
