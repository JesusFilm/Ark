import React from 'react'
import { ListHeader } from './list-header'

export const BasicListHeader = () => <ListHeader title="Authors" />

export const ListHeaderWithSeeAll = () => (
  <ListHeader
    title="Authors"
    onSeeAllClick={() => alert('This is a test click')}
  />
)
