import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { AuthorCardProps, AuthorCard } from '@jesus-film/ark.elements.author-card'

const useStyles = makeStyles((theme) => ({
  align: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  }
}))

export type AuthorListProps = {
  /** authors */
  authors: AuthorCardProps[];
};

export function AuthorList ({ authors }: AuthorListProps) {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.align}
      alignItems='center'
      spacing={4}
    >
      {authors.map((author, i) => (
        <Grid item key={`${i}-author`}>
          <AuthorCard {...author} />
        </Grid>
      ))}
    </Grid>
  )
}
