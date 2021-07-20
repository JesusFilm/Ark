import React from 'react'
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
  },
  link: {
    cursor: 'pointer'
  }
}))

export type AuthorListProps = {
  /** authors */
  authors: AuthorCardProps[]
  /** Title of the list */
  title?: string
  /** See All Callback */
  onSeeAllClick?: () => void
}

export function AuthorList({ authors, title, onSeeAllClick }: AuthorListProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      {title === 'Authors' && (
        <ListHeader title={title} onSeeAllClick={onSeeAllClick} />
      )}
      <Grid container className={classes.align} alignItems="center" spacing={4}>
        {authors.map((author, i) => (
          <Grid item key={`${i}-author`}>
            <AuthorCard {...author} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
