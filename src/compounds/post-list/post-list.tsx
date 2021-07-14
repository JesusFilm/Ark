import React, { ReactElement, createElement, ReactNode } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { PostCard } from '@jesus-film/ark.elements.core'

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
      categories?: {
        nodes?: {
          name?: string
        }[]
      }
    }[]
  }
  /**
   * Display style of list items. Variant corresponds to post index.
   * If length of variant array is less than length of posts nodes, pattern repeats.
   */
  variants?: ('hero' | 'premiere' | 'item' | 'quote' | 'default')[]
  /**
   * Number of columns at size md. If nothing is passed, defaults to 12.
   * If array is passed less than size of posts node length, repeats in pattern.
   */
  cols?: (12 | 6 | 4)[]
  /**
   * a component to link to a post (href param will be the slug of the post).
   */
  PostLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
  /** Variant style */
  variant?: 'premiere'
}

export function PostList({
  posts,
  variants = ['premiere'],
  cols = [12],
  PostLink = (props) => createElement('a', props)
}: PostListProps) {
  const classes = useStyles()
  return (
    <Grid container spacing={2} item justify="center">
      {posts.nodes.map((post, i) => (
        <Grid
          item
          key={i}
          xs={12}
          sm={
            (cols[i] || cols[cols.length < i + 1 ? i % cols.length : i]) === 4
              ? 6
              : 12
          }
          md={cols[i] || cols[cols.length < i + 1 ? i % cols.length : i]}>
          <PostLink href={post.slug} className={classes.link}>
            <PostCard
              categories={post.categories}
              src={post.featuredImage?.node?.sourceUrl}
              title={post.title}
              excerpt={post.excerpt}
              variant={
                variants[i] ||
                variants[variants.length < i + 1 ? i % variants.length : i]
              }
            />
          </PostLink>
        </Grid>
      ))}
    </Grid>
  )
}
