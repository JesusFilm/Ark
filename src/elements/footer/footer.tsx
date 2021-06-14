import {
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  Grid,
  Typography,
  makeStyles,
  Container,
  Paper
} from '@material-ui/core'
import React from 'react'
import JesusFilmLogo from './assets/jesus-film-logo.svg'
import CruLogo from './assets/cru-logo.svg'
import { Menu, MenuProps } from '@jesus-film/ark.elements.menu'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5, 0, 7)
  },
  about: {
    lineHeight: '2rem'
  }
}))

export type FooterProps = Pick<MenuProps, 'menus'>

export function Footer({ menus }: FooterProps) {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.paper}>
      <Container>
        <Menu menus={menus} direction="row">
          <Grid item xs>
            <List
              subheader={<ListSubheader disableSticky>About</ListSubheader>}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography className={classes.about}>
                      100 Lake Hart Dr
                      <br />
                      Orlando, FL 32832
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography className={classes.about}>
                      Office: (407) 826-2300
                      <br />
                      Fax: (407) 826-2375
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
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
              </ListItem>
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
        </Menu>
      </Container>
    </Paper>
  )
}
