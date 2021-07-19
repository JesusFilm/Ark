import React, { ReactNode, createElement, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Avatar,
  Container,
  Grid,
  Typography,
  Divider,
  makeStyles,
  Link
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(5, 0)
  },
  image: {
    width: 180,
    height: 180
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  author: {
    textAlign: 'center',
    marginBottom: theme.spacing(4)
  },
  heading: {
    textAlign: 'center'
  }
}))

type AuthorAvatar = {
  url: string
}

type Author = {
  /** Avatar */
  avatar: AuthorAvatar
  /** User Slug */
  slug: string
  /** Author Name */
  name: string
  /** Author Biography */
  description: string
}

type AuthorNode = {
  node: Author
}

export type PostFooterProps = {
  /**
   * Author
   */
  author?: AuthorNode
  AuthorLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
}

export function PostFooter({
  author,
  AuthorLink = (props) => createElement('a', props)
}: PostFooterProps) {
  const { t } = useTranslation('post-footer')
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="sm">
        <Divider className={classes.divider} />
        <Grid container justify="center" spacing={1}>
          <Grid item sm={5}>
            <Avatar
              alt={author.node.name}
              src={author.node.avatar.url}
              className={classes.image}
            />
          </Grid>
          <Grid item sm={7}>
            <Typography className={classes.author} variant="h5">
              <Link
                component={AuthorLink}
                href={author.node.slug}
                className={classes.link}>
                {author.node.name}
              </Link>
            </Typography>
            <Typography variant="body2">{author.node.description}</Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Container>
      <Typography variant="h2" className={classes.heading}>
        {t('His Word in Yours')}
      </Typography>
      <Typography variant="body1" className={classes.heading}>
        {t('READ MORE BLOGS & STORIES')}
      </Typography>
    </>
  )
}
