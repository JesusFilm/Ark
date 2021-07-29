import React, { ReactElement, ReactNode } from 'react'
import {
  Hidden,
  Grid,
  makeStyles,
  Box,
  Divider,
  Container
} from '@material-ui/core'
import { ListHeader } from '@jesus-film/ark.elements.list-header'
import { PostCard } from '@jesus-film/ark.elements.core'
import { chunk } from 'lodash/fp'
import {
  PremierePost,
  ItemPost,
  DefaultPost
} from '@jesus-film/ark.elements.post-card'

type PremierePostListProps = {
  /**
   * a collection of posts to be rendered in a list of premiere post cards.
   */
  posts: {
    nodes: PremierePost[]
  }
  /**
   * Component to render post link
   */
  PostLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
  /** Variant style */
  variant: 'premiere'
}

type ItemPostListProps = {
  /**
   * a collection of posts to be rendered in a list of item post cards.
   */
  posts: {
    nodes: ItemPost[]
  }
  /**
   * List-Header Title
   */
  title?: string
  /**
   * List-Header see all callback
   */
  onSeeAllClick?: () => void
  /**
   * Component to render post link
   */
  PostLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
  /**
   * Component to render author link
   */
  AuthorLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
  /** Variant style */
  variant: 'item'
}

type DefaultPostListProps = {
  /**
   * a collection of posts to be rendered in a list of default post cards.
   */
  posts: {
    nodes: DefaultPost[]
  }
  /**
   * Component to render post link
   */
  PostLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
  /**
   * Component to render category link
   */
  CategoryLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
  /** Variant style */
  variant: 'default'
}

export type PostListProps =
  | PremierePostListProps
  | ItemPostListProps
  | DefaultPostListProps

const useStyles = makeStyles((theme) => ({
  defaultGridItem: {
    borderRight: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(0, 2),
    '&:last-child': {
      borderRight: 0
    },
    [theme.breakpoints.down('xs')]: {
      borderRight: 0,
      padding: theme.spacing(2)
    }
  }
}))

export function PostList(props: PostListProps) {
  const classes = useStyles()

  switch (props.variant) {
    case 'premiere':
      return (
        <Grid container spacing={2}>
          {chunk(3, props.posts.nodes).map((posts, i) => (
            <Grid container spacing={2} item key={i} justify="center">
              {posts[0] && (
                <Grid
                  item
                  xs={12}
                  sm={posts.length === 2 ? 6 : 12}
                  md={posts.length === 3 ? 3 : 6}>
                  <PostCard
                    {...posts[0]}
                    variant="premiere"
                    PostLink={props.PostLink}
                  />
                </Grid>
              )}
              {posts[1] && (
                <Grid item xs={12} sm={6} md={6}>
                  <PostCard
                    {...posts[1]}
                    variant="premiere"
                    PostLink={props.PostLink}
                  />
                </Grid>
              )}
              {posts[2] && (
                <Grid item xs={12} sm={6} md={3}>
                  <PostCard
                    {...posts[2]}
                    variant="premiere"
                    PostLink={props.PostLink}
                  />
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
      )
    case 'item':
      return (
        <Container>
          {props.title && (
            <ListHeader
              title={props.title}
              onSeeAllClick={props.onSeeAllClick}
            />
          )}
          <Grid container spacing={2}>
            {props.posts.nodes.map((post, i) => (
              <Grid item key={i} xs={12}>
                <PostCard
                  {...post}
                  variant="item"
                  PostLink={props.PostLink}
                  AuthorLink={props.AuthorLink}
                  divider={i + 1 < props.posts.nodes.length}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      )
    case 'default':
      return (
        <>
          {chunk(3, props.posts.nodes).map((posts, i) => (
            <Box key={`posts-${i}`}>
              {i !== 0 && (
                <Hidden xsDown>
                  <Box py={2}>
                    <Divider />
                  </Box>
                </Hidden>
              )}
              <Grid container key={i}>
                {posts.map((post, j) => (
                  <Grid
                    item
                    key={`post-${j}`}
                    xs={12}
                    sm={4}
                    className={classes.defaultGridItem}>
                    <PostCard
                      {...post}
                      variant="default"
                      PostLink={props.PostLink}
                      CategoryLink={props.CategoryLink}
                    />
                    <Hidden smUp>
                      <Box pt={2}>
                        <Divider />
                      </Box>
                    </Hidden>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </>
      )
  }
}
