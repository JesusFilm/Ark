import React, { createElement, ReactElement } from 'react'
import { Box, Container, Typography, makeStyles, Grid } from '@material-ui/core'
import { Trans, useTranslation } from 'react-i18next'
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
  boxFeaturedImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  boxFeaturedImageContainer: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    background:
      'linear-gradient(180deg, rgba(17, 17, 17, 0) 7.81%, #111111 95.93%)'
  },
  container: {
    textAlign: 'center',
    padding: theme.spacing(7, 2)
  },
  containerFeaturedImage: {
    margin: 0,
    maxWidth: 800,
    padding: theme.spacing(5, 5),
    textAlign: 'left',
    color: theme.palette.common.white
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  linkFeaturedImage: {
    color: theme.palette.common.white
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
   * Url for featured image
   */
  src?: string
  /**
   * Author Name
   */
  author?: string
  /**
   * Category
   */
  category?: string
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
  src,
  author,
  category,
  AuthorLink = (props) => createElement('a', props),
  CategoryLink = (props) => createElement('a', props)
}: PostHeaderProps) {
  const { t } = useTranslation('post-header')
  const classes = useStyles()

  return (
    <Box
      style={src && { backgroundImage: `url(${src})` }}
      className={classNames(src && classes.boxFeaturedImage)}
      data-testid="featured-image">
      <Box className={classNames(src && classes.boxFeaturedImageContainer)}>
        <Container
          maxWidth={(!src && 'sm') || false}
          className={classNames(
            classes.container,
            src && classes.containerFeaturedImage
          )}>
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
            {category && !date && (
              <Grid item xs={12}>
                <Typography variant="body2" data-testid="category">
                  <Trans t={t}>
                    Published under "
                    <CategoryLink
                      className={classNames(
                        classes.link,
                        src && classes.linkFeaturedImage
                      )}>
                      {{ category }}
                    </CategoryLink>
                    "
                  </Trans>
                </Typography>
              </Grid>
            )}
            {category && date && (
              <Grid item xs={12}>
                <Typography variant="body2" data-testid="category-and-date">
                  <Trans t={t} values={{ date, category }}>
                    Published under "
                    <CategoryLink
                      className={classNames(
                        classes.link,
                        src && classes.linkFeaturedImage
                      )}>
                      {{ category }}
                    </CategoryLink>
                    " on {{ 'date, date': date }}
                  </Trans>
                </Typography>
              </Grid>
            )}
            {!category && date && (
              <Grid item xs={12}>
                <Typography variant="body2" data-testid="date">
                  {t('Published on {{date, date}}', { date })}
                </Typography>
              </Grid>
            )}
            {author && (
              <Grid item xs={12}>
                <Typography data-testid="author">
                  <Trans t={t}>
                    By{' '}
                    <AuthorLink
                      className={classNames(
                        classes.link,
                        src && classes.linkFeaturedImage
                      )}>
                      {{ author }}
                    </AuthorLink>
                  </Trans>
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
