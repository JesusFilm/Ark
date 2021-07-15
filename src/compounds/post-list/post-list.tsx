import React, { ReactElement, createElement, ReactNode } from 'react'
import { Grid, makeStyles, Divider } from '@material-ui/core'
import { PostCard } from '@jesus-film/ark.elements.core'
import { chunk } from 'lodash/fp'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

export type PostListProps = {
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
      author?: {
        node?: {
          name: string
        }
      }
      categories?: {
        nodes?: {
          name?: string
        }[]
      }
    }[]
  }
  /**
   * a component to link to a post (href param will be the slug of the post).
   */
  PostLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
  /** Variant style */
  variant?: 'premiere' | 'item' | 'default'
  /** Full Width option */
  fullWidth?: boolean
}

export function PostList({
  posts,
  PostLink = (props) => createElement('a', props),
  variant,
  fullWidth = false
}: PostListProps) {
  const classes = useStyles()
  return variant === 'premiere' ? (
    <Grid container spacing={2} item>
      {chunk(3, posts.nodes).map((posts, i) => (
        <Grid container spacing={2} item key={i} justify="center">
          {posts[0] && (
            <Grid
              item
              xs={12}
              sm={fullWidth ? 12 : posts.length === 2 ? 6 : 12}
              md={fullWidth ? 12 : posts.length === 3 ? 3 : 6}>
              <PostLink href={posts[0].slug} className={classes.link}>
                <PostCard
                  src={posts[0].featuredImage?.node?.sourceUrl}
                  title={posts[0].title}
                  excerpt={posts[0].excerpt}
                  variant="premiere"
                />
              </PostLink>
            </Grid>
          )}
          {posts[1] && (
            <Grid item xs={12} sm={fullWidth ? 12 : 6} md={fullWidth ? 12 : 6}>
              <PostLink href={posts[1].slug} className={classes.link}>
                <PostCard
                  src={posts[1].featuredImage?.node?.sourceUrl}
                  title={posts[1].title}
                  excerpt={posts[1].excerpt}
                  variant="premiere"
                />
              </PostLink>
            </Grid>
          )}
          {posts[2] && (
            <Grid item xs={12} sm={fullWidth ? 12 : 6} md={fullWidth ? 12 : 3}>
              <PostLink href={posts[2].slug} className={classes.link}>
                <PostCard
                  src={posts[2].featuredImage?.node?.sourceUrl}
                  title={posts[2].title}
                  excerpt={posts[2].excerpt}
                  variant="premiere"
                />
              </PostLink>
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  ) : variant === 'item' ? (
    <Grid container spacing={2} item>
      {posts.nodes.map((post, i) => (
        <Grid
          item
          key={i}
          xs={12}
          sm={fullWidth ? 12 : posts.nodes.length === 2 ? 6 : 12}
          md={fullWidth ? 12 : posts.nodes.length === 3 ? 3 : 6}>
          <PostLink href={post.slug} className={classes.link}>
            <PostCard
              src={post.featuredImage?.node?.sourceUrl}
              title={post.title}
              variant="item"
              author={post.author?.node?.name}
            />
          </PostLink>
          <Divider />
        </Grid>
      ))}
    </Grid>
  ) : variant === 'default' ? (
    <Grid container spacing={2} item>
      {posts.nodes.map((post, i) => (
        <Grid
          item
          key={i}
          xs={12}
          sm={fullWidth ? 12 : posts.nodes.length === 2 ? 6 : 12}
          md={fullWidth ? 12 : posts.nodes.length === 3 ? 3 : 6}>
          <PostLink href={post.slug} className={classes.link}>
            <PostCard
              src={post.featuredImage?.node?.sourceUrl}
              title={post.title}
              variant="default"
              categories={post.categories}
            />
          </PostLink>
        </Grid>
      ))}
    </Grid>
  ) : null
}
