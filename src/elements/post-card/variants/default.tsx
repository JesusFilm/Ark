import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Container
} from '@material-ui/core'
import { TimeAgo, TimeAgoProps } from '@jesus-film/ark.elements.time-ago'

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%'
  },
  category: {
    textTransform: 'uppercase'
  }
}))

export type DefaultProps = {
  /** Post title */
  title: string;
  /** Category */
  category: string;
  /** Post excerpt */
  excerpt?: string;
  /** Image source url */
  src?: string;
  /** Variant style */
  variant: 'default',
} & TimeAgoProps;

export function Default ({
  title,
  excerpt,
  category,
  datetime,
  src,
  locale
}: DefaultProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
      >
        {src && 
          <Grid item>
            <img src={src} className={classes.image} />
          </Grid>
        }
        <Grid item>
          <Typography variant="h6" className={classes.category}>{category}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        {excerpt && 
          <Grid item>
            <Typography variant="body1">{excerpt}</Typography>
          </Grid>
        }
        <Grid item>
          <TimeAgo datetime={datetime} locale={locale} />
        </Grid>
      </Grid>
    </Container>
  )
}
