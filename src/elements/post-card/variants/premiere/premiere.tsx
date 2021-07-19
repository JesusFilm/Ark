import React, { ReactNode, ReactElement, createElement } from 'react'
import { Grid, makeStyles, Typography, Link } from '@material-ui/core'

const useStyles = makeStyles(() => ({
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

export type PremierePost = {
  /** Post title */
  title: string
  /** Post slug */
  slug: string
  /** Post excerpt */
  excerpt?: string
  /**
   * Featured Image
   */
  featuredImage?: ImageNode
}

export type PremiereProps = PremierePost & {
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

export function Premiere({
  title,
  slug,
  excerpt,
  featuredImage,
  PostLink = (props) => createElement('a', props)
}: PremiereProps) {
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
          <Link component={PostLink} href={slug}>
            <img
              src={featuredImage.node.sourceUrl}
              className={classes.image}
              data-testid="featured-image"
            />
          </Link>
        </Grid>
      )}
      <Grid item>
        <Typography variant="h5" align="center" className={classes.title}>
          <Link component={PostLink} href={slug} color="inherit">
            {title}
          </Link>
        </Typography>
      </Grid>
      {excerpt && (
        <Grid item>
          <Typography variant="body2" align="center" data-testid="excerpt">
            <Link component={PostLink} href={slug} color="inherit">
              {excerpt}
            </Link>
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}
