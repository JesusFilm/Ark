import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

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

export type ItemProps = {
  /** Post title */
  title: string
  /**
   * Post author
   */
  author?: AuthorNode
  /**
   * Featured Image
   */
  featuredImage?: ImageNode
  /** Variant style */
  variant: 'item'
}

export function Item({ title, author, featuredImage }: ItemProps) {
  const classes = useStyles()

  return (
    <Grid container spacing={2} data-testid="itemVariant">
      {featuredImage?.node?.sourceUrl && (
        <Grid item sm={4} xs={12}>
          <img
            src={featuredImage.node.sourceUrl}
            className={classes.image}
            data-testid="featured-image"
          />
        </Grid>
      )}
      <Grid item sm={featuredImage?.node?.sourceUrl ? 8 : 12} xs={12}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        {author?.node?.name && (
          <Typography
            variant="h6"
            className={classes.author}
            data-testid="author">
            {author.node.name}
          </Typography>
        )}
      </Grid>
    </Grid>
  )
}
