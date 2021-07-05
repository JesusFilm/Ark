import React from 'react'
import { CoreList } from '.'
import { blocks } from '../blockData'
import { CoreListProps } from './core-list'

export const ListBlock = () => (
  <CoreList
    {...(blocks.filter(
      (block) => block.name === 'core/list'
    )[0] as CoreListProps)}
  />
)
