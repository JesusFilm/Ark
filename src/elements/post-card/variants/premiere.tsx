import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Container
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%'
  }
}))

export type PremiereProps = {
  /** Post title */
  title: string;
  /** Post excerpt */
  excerpt?: string;
  /** Image source url */
  src?: string;
  /** Variant style */
  variant: 'premiere'
};

export function Premiere ({
  title,
  excerpt,
  src
}: PremiereProps) {
  const classes = useStyles()

  return (
    <Container maxWidth="xs">
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        {src && 
          <Grid item>
            <img src={src} className={classes.image} />
          </Grid>
        }
        <Grid item>
          <Typography variant="subtitle1" align="center">{title}</Typography>
        </Grid>
        {excerpt && 
          <Grid item>
            <Typography variant="body2" align="center">{excerpt}</Typography>
          </Grid>
        }
      </Grid>
    </Container>
  )
}
