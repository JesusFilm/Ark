import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: '100%'
  },
  category: {
    textTransform: 'uppercase'
  }
}))

export type DefaultProps = {
  /** Post title */
  title: string
  /** Category */
  category: string
  /** Post excerpt */
  excerpt?: string
  /** Image source url */
  src?: string
  /** Variant style */
  variant: 'default'
}

export function Default({ title, excerpt, category, src }: DefaultProps) {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justify="flex-start"
      spacing={1}
      data-testid="defaultVariant">
      {src && (
        <Grid item>
          <img src={src} className={classes.image} />
        </Grid>
      )}
      <Grid item>
        <Typography variant="h6" className={classes.category}>
          {category}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      {excerpt && (
        <Grid item>
          <Typography variant="body1">{excerpt}</Typography>
        </Grid>
      )}
    </Grid>
  )
}
