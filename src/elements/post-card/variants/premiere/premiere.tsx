import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%'
  },
  title: {
    fontWeight: 700
  }
}))

type Image = {
  /**
   * Image URL
   */
  sourceUrl: string
}

type ImageNode = {
  node: Image
}

export type PremiereProps = {
  /** Post title */
  title: string
  /** Post excerpt */
  excerpt?: string
  /**
   * Featured Image
   */
  featuredImage?: ImageNode
  /** Variant style */
  variant: 'premiere'
}

export function Premiere({ title, excerpt, featuredImage }: PremiereProps) {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={1}
      data-testid="premiereVariant">
      {featuredImage?.node?.sourceUrl && (
        <Grid item>
          <img
            src={featuredImage.node.sourceUrl}
            className={classes.image}
            data-testid="featured-image"
          />
        </Grid>
      )}
      <Grid item>
        <Typography variant="h5" align="center" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      {excerpt && (
        <Grid item>
          <Typography variant="body2" align="center" data-testid="excerpt">
            {excerpt}
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}
