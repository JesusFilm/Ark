import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  quote: {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
    '&::before': {
      content: 'open-quote',
      fontSize: '2em',
      fontStyle: 'italic'
    }
  }
}))

export type QuoteProps = {
  /** Post title */
  title: string
  /** excerpt  */
  excerpt: string
  /** Variant style */
  variant: 'quote'
}
export function Quote({ title, excerpt }: QuoteProps) {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justify="flex-start"
      spacing={1}
      data-testid="quoteVariant">
      <Grid item>
        <Typography variant="h2" className={classes.quote}>
          {excerpt}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">- {title}</Typography>
      </Grid>
    </Grid>
  )
}
