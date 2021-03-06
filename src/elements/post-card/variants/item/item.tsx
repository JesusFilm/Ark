import React, { ReactNode, ReactElement, createElement } from 'react'
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Link,
  Divider
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '100%'
  },
  author: {
    textTransform: 'uppercase'
  }
}))

type Author = {
  /** Author name */
  name: string
  /** Author slug */
  slug: string
}

type AuthorNode = {
  /** Avatar */
  node: Author
}

type Image = {
  /**
   * Image URL
   */
  sourceUrl: string
}

type ImageNode = {
  node: Image
}

export type ItemPost = {
  /** Post title */
  title: string
  /** Post slug */
  slug: string
  /**
   * Post author
   */
  author?: AuthorNode
  /**
   * Featured Image
   */
  featuredImage?: ImageNode
}

export type ItemProps = ItemPost & {
  /**
   * Divider should show at the bottom
   */
  divider?: boolean
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

export function Item({
  title,
  slug,
  author,
  featuredImage,
  divider,
  PostLink = (props) => createElement('a', props),
  AuthorLink = (props) => createElement('a', props)
}: ItemProps) {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={2} data-testid="itemVariant">
        {featuredImage?.node?.sourceUrl && (
          <Grid item sm={4} xs={12}>
            <Link component={PostLink} href={slug} underline="none">
              <img
                src={featuredImage.node.sourceUrl}
                className={classes.image}
                data-testid="featured-image"
              />
            </Link>
          </Grid>
        )}
        <Grid item sm={featuredImage?.node?.sourceUrl ? 8 : 12} xs={12}>
          <Typography variant="h5">
            <Link
              component={PostLink}
              href={slug}
              color="inherit"
              underline="none">
              {title}
            </Link>
          </Typography>
          {author?.node?.name && (
            <Typography
              variant="h6"
              className={classes.author}
              data-testid="author">
              <Link
                component={AuthorLink}
                href={author.node.slug}
                color="inherit"
                underline="none">
                {author.node.name}
              </Link>
            </Typography>
          )}
        </Grid>
      </Grid>
      {divider && (
        <Box mt={2}>
          <Divider data-testid="divider" />
        </Box>
      )}
    </>
  )
}
