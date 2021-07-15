import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  Container
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    color: theme.palette.primary.contrastText
  },
  box: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8)
  },
  boxOverlay: {
    background: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))',
    width: '100%',
    minHeight: '80vh'
  },
  grid: {
    maxWidth: 600
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

export type HeroProps = {
  /** Post title */
  title: string
  /** Post excerpt */
  excerpt?: string
  /** Category */
  categories?: CategoryNodes
  /**
   * Featured Image
   */
  featuredImage?: ImageNode
  /** Callback when button is clicked */
  onClick?: () => void
  /** Variant style */
  variant: 'hero'
}

export function Hero({
  title,
  categories,
  excerpt,
  featuredImage,
  onClick
}: HeroProps) {
  const classes = useStyles()
  const { t } = useTranslation('post-card')

  return (
    <Box
      data-testid="heroVariant"
      className={classNames(
        featuredImage?.node?.sourceUrl && classes.heroBackground
      )}
      style={
        featuredImage?.node?.sourceUrl
          ? { backgroundImage: `url(${featuredImage.node.sourceUrl})` }
          : null
      }>
      <Box
        className={classNames(
          classes.box,
          featuredImage?.node?.sourceUrl && classes.boxOverlay
        )}>
        <Container>
          <Grid
            container
            direction="column"
            spacing={2}
            className={classes.grid}>
            {categories?.nodes?.[0]?.name && (
              <Grid item>
                <Typography variant="h6" data-testid="category">
                  {categories.nodes[0].name}
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Typography variant="h2">{title}</Typography>
            </Grid>
            {excerpt && (
              <Grid item>
                <Typography data-testid="excerpt">{excerpt}</Typography>
              </Grid>
            )}
            {onClick && (
              <Grid item>
                <Button
                  onClick={onClick}
                  variant="contained"
                  color="primary"
                  size="large">
                  {t('Read Story')}
                </Button>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
