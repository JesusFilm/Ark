import React, { createElement, ReactElement } from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Avatar,
  Box,
  Container
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  wrap: {
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap'
    }
  },
  name: {
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  description: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  image: {
    width: 100,
    height: 100,
    fontSize: 30
  }
}))

export type AuthorCardProps = {
  /** author name */
  name: string
  /** author bio */
  description?: string
  /** Background image source url */
  src?: string
  /** Author Link */
  AuthorLink?: (
    props: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => ReactElement
}

export function AuthorCard({
  name,
  description,
  src,
  AuthorLink = (props) => createElement('a', props)
}: AuthorCardProps) {
  const classes = useStyles()
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <Container maxWidth="sm">
      <Box>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.wrap}
          spacing={2}>
          <Grid item>
            <AuthorLink>
              <Avatar alt={name} src={src} className={classes.image}>
                {initials}
              </Avatar>
            </AuthorLink>
          </Grid>
          <Grid item md container direction="column" spacing={2}>
            <Grid item>
              <Typography
                variant="h5"
                color="textSecondary"
                className={classes.name}>
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.description}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
