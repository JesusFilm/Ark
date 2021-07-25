import React, { ReactNode, ReactElement, createElement } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'
import { ListHeader } from '@jesus-film/ark.elements.list-header'
import { Author, AuthorCard } from '@jesus-film/ark.elements.author-card'

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
  authors: {
    node: Author[]
  }
  /** Title of the list */
  title?: string
  /** See All Callback */
  onSeeAllClick?: () => void
  /** Author Link */
  AuthorLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
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
      {title && <ListHeader title={title} onSeeAllClick={onSeeAllClick} />}
      <Grid container className={classes.align} alignItems="center" spacing={4}>
        {authors.node.map((author, i) => (
          <Grid item key={`${i}-author`}>
            <AuthorCard {...author} AuthorLink={AuthorLink} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
