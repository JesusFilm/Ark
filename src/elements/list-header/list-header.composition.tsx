import React from 'react'
import { ListHeader, ListHeaderProps } from './list-header'

export const BasicListHeader = (props: Partial<ListHeaderProps>) => (
  <ListHeader title="Authors" {...props} />
)

export const ListHeaderWithCallback = (props: Partial<ListHeaderProps>) => (
  <ListHeader
    title="Authors"
    onSeeAllClick={() => alert('This is a test click')}
    {...props}
  />
)
