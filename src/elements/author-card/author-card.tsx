import React, { ReactNode, ReactElement, createElement } from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Avatar,
  Container,
  Link
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
    },
    color: theme.palette.text.primary,
    cursor: 'pointer'
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

type AuthorAvatar = {
  url: string
}

type Author = {
  /** author name */
  name: string
  /** author bio */
  description?: string
  /** author slug */
  slug: string
  /** Background image source url */
  avatar: AuthorAvatar
  /** Author Link */
}

type AuthorNode = {
  node: Author
}

export type AuthorCardProps = {
  /** Author */
  author: AuthorNode
  AuthorLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
}

export function AuthorCard({
  author,
  AuthorLink = (props) => createElement('a', props)
}: AuthorCardProps) {
  const classes = useStyles()
  const initials = author.node.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.wrap}
        spacing={2}>
        <Grid item>
          <Avatar
            alt={author.node.name}
            src={author.node.avatar.url}
            className={classes.image}>
            {initials}
          </Avatar>
        </Grid>
        <Grid item md container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h5" color="textSecondary">
              <Link
                component={AuthorLink}
                href={author.node.slug}
                className={classes.name}>
                {author.node.name}
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.description}>
              {author.node.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
