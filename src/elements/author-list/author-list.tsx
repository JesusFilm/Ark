import React, { createElement, ReactElement } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'
import { ListHeader } from '@jesus-film/ark.elements.list-header'
import {
  AuthorCardProps,
  AuthorCard
} from '@jesus-film/ark.elements.author-card'

const useStyles = makeStyles((theme) => ({
  align: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  }
}))

export type AuthorListProps = {
  /** authors */
  authors: AuthorCardProps[]
  /** Title of the list */
  title?: string
  /** See All */
  onSeeAllClick?: () => void
  /** Author Link */
  AuthorLink?: (
    props: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => ReactElement
}

export function AuthorList({
  authors,
  title,
  onSeeAllClick,
  AuthorLink = (props) => createElement('a', props)
}: AuthorListProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      {title === 'Authors' ? (
        <ListHeader title={title} onSeeAllClick={onSeeAllClick} />
      ) : (
        <></>
      )}
      <Grid container className={classes.align} alignItems="center" spacing={4}>
        {authors.map((author, i) => (
          <Grid item key={`${i}-author`}>
            <AuthorLink>
              <AuthorCard {...author} />
            </AuthorLink>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
