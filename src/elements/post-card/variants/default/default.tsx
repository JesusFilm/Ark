import React, { ReactNode, ReactElement, createElement } from 'react'
import { Box, makeStyles, Typography, Link } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(() => ({
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

export type DefaultPost = {
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
   * Post publishing date.
   */
  date?: string
}

export type DefaultProps = DefaultPost & {
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

export function Default({
  title,
  slug,
  excerpt,
  categories,
  featuredImage,
  date,
  PostLink = (props) => createElement('a', props),
  CategoryLink = (props) => createElement('a', props)
}: DefaultProps) {
  const { t } = useTranslation('post-card')
  const classes = useStyles()

  return (
    <Box data-testid="defaultVariant">
      {featuredImage?.node?.sourceUrl && (
        <Link component={PostLink} href={slug} underline="none">
          <img src={featuredImage.node.sourceUrl} className={classes.image} />
        </Link>
      )}
      {categories?.nodes?.[0]?.name && (
        <Box my={1}>
          <Typography variant="h6" data-testid="category">
            <Link
              component={CategoryLink}
              href={categories.nodes[0].slug}
              color="inherit"
              underline="none">
              {categories.nodes[0].name}
            </Link>
          </Typography>
        </Box>
      )}
      <Box my={1}>
        <Typography
          variant="h5"
          aria-label="title"
          className={classes.title}
          gutterBottom>
          <Link
            component={PostLink}
            href={slug}
            color="inherit"
            underline="none">
            {title}
          </Link>
        </Typography>
        {excerpt && (
          <Typography gutterBottom>
            <Link
              component={PostLink}
              href={slug}
              color="inherit"
              underline="none">
              {excerpt}
            </Link>
          </Typography>
        )}
        {date && (
          <Typography variant="body2" color="textSecondary" gutterBottom>
            <Link
              component={PostLink}
              href={slug}
              color="inherit"
              underline="none">
              {t('{{date, date}}', { date })}
            </Link>
          </Typography>
        )}
      </Box>
    </Box>
  )
}
