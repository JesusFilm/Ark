import { JesusFilmSymbol } from '@jesus-film/ark.elements.jesus-film-symbol'
import {
  AppBar,
  Box,
  IconButton,
  makeStyles,
  Toolbar,
  Drawer,
  Divider
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import React, { useState } from 'react'
import JesusFilmProjectText from './assets/jesus-film-project-text.svg'
import { Donate } from '@jesus-film/ark.elements.donate'
import { Menu, MenuProps } from '@jesus-film/ark.elements.menu'
import CloseIcon from '@material-ui/icons/Close'
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
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export type NavigationProps = Pick<MenuProps, 'menus'>

export function Navigation({ menus }: NavigationProps) {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Toolbar />
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        color="transparent"
        className={classes.appBar}
        data-testid="AppBar">
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
            <Donate variant="button" />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.drawerPaper }}>
        <Box m={2} className={classes.heading}>
          <JesusFilmSymbol height={48} text />
          <Box>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider />
        <Menu menus={menus} />
      </Drawer>
    </>
  )
}
