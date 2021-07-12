import React, { createElement, ReactElement } from 'react'
import {
  Avatar,
  Container,
  Grid,
  Typography,
  Divider,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(5, 0)
  },
  image: {
    width: 180,
    height: 180
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  author: {
    textAlign: 'center',
    marginBottom: theme.spacing(4)
  },
  heading: {
    textAlign: 'center'
  }
}))

type AuthorAvatar = {
  url: string
}

type Author = {
  /** User Slug */
  slug: string
  /** Avatar */
  avatar: AuthorAvatar
  /** Author Name */
  name: string
  /** Author Biography */
  description: string
}

type AuthorNode = {
  node: Author
}

type Blog = {
  /**
   * blog heading
   */
  heading: string
  /**
   * blog content
   */
  content: string
}

type BlogNode = {
  node: Blog
}

export type PostFooterProps = {
  /**
   * Author
   */
  author?: AuthorNode
  /**
   * More Blogs
   */
  blogs?: BlogNode
  AuthorLink?: (
    props: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => ReactElement
}

export function PostFooter({
  author,
  AuthorLink = (props) => createElement('a', props)
}: PostFooterProps) {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="sm">
        <Divider className={classes.divider} />
        <Grid
          container
          justify="center"
          spacing={1}
          data-testid={author.node.slug}>
          <Grid item sm={5}>
            <Avatar
              alt="Josh McDowell"
              src={author.node.avatar.url}
              className={classes.image}
            />
          </Grid>
          <Grid item sm={7}>
            <Typography className={classes.author} variant="h5">
              <AuthorLink className={classes.link}>
                {author.node.name}
              </AuthorLink>
            </Typography>
            <Typography variant="body2">{author.node.description}</Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Container>
      <Typography variant="h2" className={classes.heading}>
        His Word in Yours
      </Typography>
      <Typography variant="body1" className={classes.heading}>
        READ MORE BLOGS & STORIES
      </Typography>
    </>
  )
}
