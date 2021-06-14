import {
  List,
  ListItem as MaterialListItem,
  ListSubheader,
  ListItemText,
  Collapse,
  useTheme,
  Grid,
  Typography,
  makeStyles,
  Container,
  Paper
} from '@material-ui/core'
import React, { useState } from 'react'
import convertToTree from '@jesus-film/ark.util.convert-to-tree'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import JesusFilmLogo from './assets/jesus-film-logo.svg'
import CruLogo from './assets/cru-logo.svg'

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

interface ListItemProp {
  node: NodeWithChildren
  level?: number
}

function ListItem({ node, level = 0 }: ListItemProp) {
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

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5, 0, 7)
  },
  about: {
    lineHeight: '2rem'
  }
}))

export type FooterProps = {
  /**
   * menus to display side by side.
   */
  menus?: {
    id: string
    name?: string
    menuItems: {
      nodes: Node[]
    }
  }[]
}

export function Footer({ menus }: FooterProps) {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.paper}>
      <Container>
        <Grid container spacing={2}>
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
          <Grid item xs>
            <List
              subheader={<ListSubheader disableSticky>About</ListSubheader>}>
              <MaterialListItem>
                <ListItemText
                  primary={
                    <Typography className={classes.about}>
                      100 Lake Hart Dr
                      <br />
                      Orlando, FL 32832
                    </Typography>
                  }
                />
              </MaterialListItem>
              <MaterialListItem>
                <ListItemText
                  primary={
                    <Typography className={classes.about}>
                      Office: (407) 826-2300
                      <br />
                      Fax: (407) 826-2375
                    </Typography>
                  }
                />
              </MaterialListItem>
              <MaterialListItem>
                <ListItemText
                  primary={
                    <Typography className={classes.about}>
                      <span>
                        Copyright &copy; 1995-{new Date().getFullYear()}.
                      </span>
                      <br />
                      Jesus Film Project&reg;.
                      <br />
                      All rights reserved
                    </Typography>
                  }
                />
              </MaterialListItem>
            </List>
          </Grid>
          <Grid item xs={12} container spacing={10} justify="center">
            <Grid item>
              <a href="https://jesusfilm.org" target="_blank" rel="noreferrer">
                <img src={JesusFilmLogo} height={90} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://cru.org" target="_blank" rel="noreferrer">
                <img src={CruLogo} height={90} />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}
