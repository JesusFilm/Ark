import React from 'react'
import {
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import { TimeAgo, TimeAgoProps } from '@jesus-film/ark.elements.time-ago'

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
  /** post title */
  title: string;
  /** excerpt  */
  excerpt: string;
  /** Variant Style */
  style: 'quote'
};

export function Quote ({
  title,
  excerpt,
  datetime,
  locale
}: QuoteProps & TimeAgoProps) {
  const classes = useStyles()

  return (
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
      >
        <Grid item>
          <Typography variant="h2" className={classes.quote}>{excerpt}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            - {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <TimeAgo datetime={datetime} locale={locale} />
          </Typography>
        </Grid>
      </Grid>
  )
}
