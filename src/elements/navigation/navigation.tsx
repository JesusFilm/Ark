import { JesusFilmSymbol } from '@jesus-film/ark.elements.jesus-film-symbol'
import convertToTree from '@jesus-film/ark.util.convert-to-tree'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Drawer,
  useScrollTrigger,
  Grid,
  ListSubheader,
  ListItem as MaterialListItem,
  useTheme,
  Collapse,
  List,
  ListItemText,
  Divider
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { JesusFilmBrandmark } from '../jesus-film-brandmark'
import JesusFilmProjectText from './assets/jesus-film-project-text.svg'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  toolbar: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  actions: {
    display: 'flex',
    alignItems: 'center'
  },
  actionsRight: {
    justifyContent: 'flex-end'
  },
  drawerPaper: {
    minWidth: 400
  }
}))

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

interface Node {
  id: string
  parentId?: string
  label?: string
  target?: string
  title?: string
  url?: string
}

export type NavigationProps = {
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

export function Navigation({ menus }: NavigationProps) {
  const classes = useStyles()
  const { t } = useTranslation()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })
  const [open, setOpen] = useState(false)

  return (
    <>
      <Toolbar />
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        color="transparent"
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.actions}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <JesusFilmSymbol height={25} />
          </Box>
          <Box className={classes.title}>
            <img src={JesusFilmProjectText} height={25} />
          </Box>
          <Box className={[classes.actions, classes.actionsRight].join(' ')}>
            <Button color="inherit">{t('Donate')}</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.drawerPaper }}>
        <Box m={2} textAlign="right">
          <JesusFilmSymbol height={60} text />
        </Box>
        <Divider />
        <Grid container spacing={2} direction="column">
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
        </Grid>
      </Drawer>
    </>
  )
}
