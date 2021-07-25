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

type AuthorAvatar = {
  url: string
}

export type Author = {
  /** author name */
  name: string
  /** author bio */
  description?: string
  /** author slug */
  slug: string
  /** Background image source url */
  avatar?: AuthorAvatar
  /** Author Link */
}

export type AuthorCardProps = Author & {
  /** Author */
  AuthorLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
}

export function AuthorCard({
  name,
  description,
  slug,
  avatar,
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
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.wrap}
        spacing={2}>
        <Grid item>
          <Avatar alt={name} src={avatar.url} className={classes.image}>
            {initials}
          </Avatar>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom className={classes.name}>
            <Link
              component={AuthorLink}
              href={slug}
              color="textSecondary"
              underline="none">
              {name}
            </Link>
          </Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
