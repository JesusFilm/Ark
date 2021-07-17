import React, { ReactNode, ReactElement, createElement } from 'react'

import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  Container,
  Link
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { JesusFilmSymbol } from '@jesus-film/ark.elements.jesus-film-symbol'

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
    justifyContent: 'space-between',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center'
    }
  },
  gridPost: {
    maxWidth: 600
  },
  title: {
    fontFamily: theme.typography.h6.fontFamily,
    fontWeight: 700
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}))

type Category = {
  /**
   * Category Name
   */
  name: string
  /** Category slug */
  slug: string
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
  /** Post slug */
  slug: string
  /** Post excerpt */
  excerpt?: string
  /** Category (Uses only first category) */
  categories?: CategoryNodes
  /**
   * Featured Image
   */
  featuredImage?: ImageNode
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
  variant: 'hero'
}

export function Hero({
  title,
  slug,
  categories,
  excerpt,
  featuredImage,
  PostLink = (props) => createElement('a', props),
  CategoryLink = (props) => createElement('a', props)
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
          <Grid container className={classes.grid} spacing={2}>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              className={classes.gridPost}>
              {categories?.nodes?.[0]?.name && (
                <Grid item>
                  <Typography variant="h6" data-testid="category">
                    <Link
                      component={CategoryLink}
                      href={categories.nodes[0].slug}
                      color="inherit"
                      underline="none">
                      {categories.nodes[0].name}
                    </Link>
                  </Typography>
                </Grid>
              )}
              <Grid item>
                <Typography variant="h2" className={classes.title}>
                  {title}
                </Typography>
              </Grid>
              {excerpt && (
                <Grid item>
                  <Typography data-testid="excerpt" gutterBottom>
                    {excerpt}
                  </Typography>
                </Grid>
              )}
              <Grid item>
                <Link component={PostLink} href={slug} underline="none">
                  <Button
                    variant="contained"
                    color={
                      featuredImage?.node?.sourceUrl ? 'default' : 'primary'
                    }
                    size="large"
                    className={classes.button}>
                    {t('Read Story')}
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <JesusFilmSymbol variant="white" text width={150} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
