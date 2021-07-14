import React from 'react'
import { Grid, makeStyles, Typography, Container } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '100%'
  },
  author: {
    textTransform: 'uppercase'
  }
}))

export type ItemProps = {
  /** Post title */
  title: string
  /** author name */
  author?: string
  /** Image source url */
  src?: string
  /** Variant style */
  variant: 'item'
}

export function Item({ title, author, src }: ItemProps) {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" data-testid="itemVariant">
      <Grid container spacing={2}>
        {src && (
          <Grid item sm={4} xs={12}>
            <img src={src} className={classes.image} />
          </Grid>
        )}
        <Grid item sm={src ? 8 : 12} xs={12}>
          <Typography variant="h5" gutterBottom={!!author}>
            {title}
          </Typography>
          {author && (
            <Typography variant="h6" className={classes.author}>
              {author}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}
