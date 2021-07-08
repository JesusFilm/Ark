import React, { ReactElement, createElement, ReactNode } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { PostCard } from '@jesus-film/ark.elements.core'
import { chunk } from 'lodash/fp'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

export type PostsProps = {
  /**
   * a collection of posts to be rendered in the component.
   */
  posts: {
    nodes?: {
      slug?: string
      title?: string
      excerpt?: string
      featuredImage?: {
        node?: {
          sourceUrl: string
        }
      }
    }[]
  }
  /**
   * a component to link to a post (href param will be the slug of the post).
   */
  Link?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
}

export function Posts({
  posts,
  Link = (props) => createElement('a', props)
}: PostsProps) {
  const classes = useStyles()
  return (
    <Grid container spacing={2} item>
      {chunk(3, posts.nodes).map((posts, i) => (
        <Grid container spacing={2} item key={i} justify="center">
          {posts[0] && (
            <Grid
              item
              xs={12}
              sm={posts.length === 2 ? 6 : 12}
              md={posts.length === 3 ? 3 : 6}>
              <Link href={posts[0].slug} className={classes.link}>
                <PostCard
                  src={posts[0].featuredImage?.node?.sourceUrl}
                  title={posts[0].title}
                  excerpt={posts[0].excerpt}
                  variant="premiere"
                />
              </Link>
            </Grid>
          )}
          {posts[1] && (
            <Grid item xs={12} sm={6} md={6}>
              <Link href={posts[1].slug} className={classes.link}>
                <PostCard
                  src={posts[1].featuredImage?.node?.sourceUrl}
                  title={posts[1].title}
                  excerpt={posts[1].excerpt}
                  variant="premiere"
                />
              </Link>
            </Grid>
          )}
          {posts[2] && (
            <Grid item xs={12} sm={6} md={3}>
              <Link href={posts[2].slug} className={classes.link}>
                <PostCard
                  src={posts[2].featuredImage?.node?.sourceUrl}
                  title={posts[2].title}
                  excerpt={posts[2].excerpt}
                  variant="premiere"
                />
              </Link>
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  )
}
