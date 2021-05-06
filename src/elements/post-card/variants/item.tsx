import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Container
} from '@material-ui/core'

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
  title: string;
  /** author name */
  author?: string;
  /** Image source url */
  src?: string;
  /** Variant style */
  variant: 'item'
};

export function Item ({
  title,
  author,
  src
}: ItemProps) {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
      >
        {src &&
          (<Grid item sm={3} xs={3} md={3}>
              <img src={src} className={classes.image} />
          </Grid>)
        }
        <Grid
          item
          xs={src ? 9 : 12}
          sm={src ? 9 : 12}
          md={src ? 9 : 12}
          container
          direction="column"
          alignItems="flex-start"
          justify="flex-start"
          spacing={1}
        >
          <Grid item>
            <Typography variant="subtitle1">{title}</Typography>
          </Grid>
          {author && 
            <Grid item>
              <Typography variant="body2" className={classes.author}>{author}</Typography>
            </Grid>
          }
        </Grid>
      </Grid>
    </Container>

  )
}
