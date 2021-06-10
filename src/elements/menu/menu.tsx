import React, { ReactNode, useState } from 'react'
import convertToTree from '@jesus-film/ark.util.convert-to-tree'
import {
  Grid,
  ListSubheader,
  ListItem as MaterialListItem,
  useTheme,
  Collapse,
  List,
  ListItemText,
  GridDirection
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

interface Node {
  id: string
  parentId?: string
  label?: string
  target?: string
  title?: string
  url?: string
}

type NodeWithChildren = Node & {
  children: NodeWithChildren[]
}

interface ListItemProps {
  node: NodeWithChildren
  level?: number
}

function ListItem({ node, level = 0 }: ListItemProps) {
  const [open, setOpen] = useState(true)
  const theme = useTheme()

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <MaterialListItem
        button
        component="a"
        title={node.title}
        target={node.target}
        href={node.url}
        onClick={node.children.length ? handleClick : null}
        style={{ paddingLeft: theme.spacing(level * 2 + 2) }}>
        <ListItemText primary={node.label} />
        {node.children.length ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </MaterialListItem>

      {node.children.length ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.children.map((node) => (
              <ListItem key={node.id} node={node} level={level + 1} />
            ))}
          </List>
        </Collapse>
      ) : null}
    </>
  )
}

export type MenuProps = {
  /**
   * a menu node containing a collection of Menus.
   */
  menus?: {
    id: string
    name?: string
    menuItems: {
      nodes: Node[]
    }
  }[]
  children?: ReactNode
  direction?: GridDirection
}

export function Menu({ menus, children, direction = 'column' }: MenuProps) {
  return (
    <Grid container spacing={2} direction={direction}>
      {menus?.map((menu) => (
        <Grid item key={menu.id} xs>
          <List
            subheader={
              <ListSubheader disableSticky>{menu.name}</ListSubheader>
            }>
            {convertToTree(menu.menuItems.nodes).map((node) => (
              <ListItem key={node.id} node={node} />
            ))}
          </List>
        </Grid>
      ))}
      {children}
    </Grid>
  )
}
