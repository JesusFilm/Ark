import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%'
  },
  title: {
    fontWeight: 700
  }
}))

type Category = {
  /**
   * Category Name
   */
  name: string
}

type CategoryNodes = {
  nodes: Category[]
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

export type DefaultProps = {
  /** Post title */
  title: string
  /** Post excerpt */
  excerpt?: string
  /** Category (Uses only first category) */
  categories?: CategoryNodes
  /**
   * Featured Image
   */
  featuredImage?: ImageNode
  /**
   * Post publishing date.
   */
  date?: string
  /** Variant style */
  variant: 'default'
}

export function Default({
  title,
  excerpt,
  categories,
  featuredImage,
  date
}: DefaultProps) {
  const { t } = useTranslation('post-card')
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justify="flex-start"
      spacing={1}
      data-testid="defaultVariant">
      {featuredImage?.node?.sourceUrl && (
        <Grid item>
          <img src={featuredImage.node.sourceUrl} className={classes.image} />
        </Grid>
      )}
      {categories?.nodes?.[0]?.name && (
        <Grid item>
          <Box py={1}>
            <Typography variant="h6" aria-label="category">
              {categories.nodes[0].name}
            </Typography>
          </Box>
        </Grid>
      )}
      <Grid item>
        <Typography variant="h5" aria-label="title" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      {excerpt && (
        <Grid item>
          <Typography>{excerpt}</Typography>
        </Grid>
      )}
      {date && (
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            {t('{{date, date}}', { date })}
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}
