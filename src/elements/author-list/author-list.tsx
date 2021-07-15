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
  }
}))

export type AuthorListProps = {
  /** authors */
  authors: AuthorCardProps[]
}

export function AuthorList({ authors }: AuthorListProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      <ListHeader title="Author" />
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
