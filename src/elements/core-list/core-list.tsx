import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

type Attributes = {
  /** Order List? */
  ordered: boolean
  /** Content in html */
  values: string
}

export type CoreListProps = {
  /** Content */
  attributes: Attributes
  /** Variant style */
  name: 'core/paragraph'
}

export function CoreList({ attributes: { ordered, values } }: CoreListProps) {
  const list = values
    .replace(/<\/li><li>/g, '*-*')
    .replace('</li>', '')
    .replace('<li>', '')
    .split('*-*')

  console.log(list)
  return (
    <List dense>
      {list.map((item, i) => (
        <ListItem key={i}>
          <ListItemText primary={ordered ? `${i + 1} ${item}` : item} />
        </ListItem>
      ))}
    </List>
  )
}
