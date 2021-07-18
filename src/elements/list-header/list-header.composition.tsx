import React from 'react'
import { ListHeader, ListHeaderProps } from './list-header'

export const BasicListHeader = () => <ListHeader title="Authors" />

export const ListHeaderWithSeeAll = (props: Partial<ListHeaderProps>) => (
  <ListHeader
    title="Authors"
    onSeeAllClick={() => alert('This is a test click')}
    {...props}
  />
)
