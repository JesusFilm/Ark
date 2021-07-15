import React from 'react'
import { ListHeader } from './list-header'

export const BasicListHeader = () => (
  <ListHeader title="Authors" onClick={() => alert('Test')} />
)
