import React, { createElement, ReactElement } from 'react'
import { Container, Typography, makeStyles, Grid } from '@material-ui/core'
import {
  Trans,
  useTranslation
} from '.pnpm/react-i18next@11.10.0_i18next@20.3.1+react@17.0.2/node_modules/react-i18next'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing(7, 2)
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}))

export type PostHeaderProps = {
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title?: string
  /**
   * The excerpt of the post.
   */
  excerpt?: string
  /**
   * Post publishing date.
   */
  date?: string
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage?: {
    node?: {
      sourceUrl?: string
    }
  }
  /**
   * Author Name
   */
  author?: {
    name?: string
  }
  /**
   * Category
   */
  category?: {
    name?: string
  }
  AuthorLink?: (
    props: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => ReactElement
  CategoryLink?: (
    props: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => ReactElement
}

export function PostHeader({
  title,
  excerpt,
  date,
  featuredImage,
  author,
  category,
  AuthorLink = (props) => createElement('a', props),
  CategoryLink = (props) => createElement('a', props)
}: PostHeaderProps) {
  const { t } = useTranslation('post-header')
  const classes = useStyles()
  const categoryName = category?.name

  return (
    <Container maxWidth="sm" className={classes.container}>
      <a />
      <Grid container spacing={3}>
        {title && (
          <Grid item xs={12}>
            <Typography variant="h3" component="h1">
              {title}
            </Typography>
          </Grid>
        )}
        {excerpt && (
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              {excerpt}
            </Typography>
          </Grid>
        )}
        {categoryName && !date && (
          <Grid item xs={12}>
            <Typography variant="body2" data-testid="category">
              <Trans t={t}>
                Published under "
                <CategoryLink className={classes.link}>
                  {{ categoryName }}
                </CategoryLink>
                "
              </Trans>
            </Typography>
          </Grid>
        )}
        {categoryName && date && (
          <Grid item xs={12}>
            <Typography variant="body2" data-testid="category-and-date">
              <Trans t={t} values={{ date, categoryName }}>
                Published under "
                <CategoryLink className={classes.link}>
                  {{ categoryName }}
                </CategoryLink>
                " on {{ 'date, date': date }}
              </Trans>
            </Typography>
          </Grid>
        )}
        {!categoryName && date && (
          <Grid item xs={12}>
            <Typography variant="body2" data-testid="date">
              {t('Published on {{date, date}}', { date })}
            </Typography>
          </Grid>
        )}
        {author?.name && (
          <Grid item xs={12}>
            <Typography data-testid="author">
              <Trans t={t}>
                By{' '}
                <AuthorLink className={classes.link}>
                  {{ name: author.name }}
                </AuthorLink>
              </Trans>
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
