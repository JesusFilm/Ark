import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardSize: {
    height: '320px',
    margin: theme.spacing(3, 0)
  }
}))

type Attributes = {
  refId: string
}

export type CoreArclightProps = {
  /**
   * Container for Arclight attributes
   */
  attributes: Attributes
  __typename: 'LazyblockArclightBlock'
}

export function CoreArclight({ attributes }: CoreArclightProps) {
  const classes = useStyles()
  const arclightUrl = `http://api.arclight.org/videoPlayerUrl?refId=${attributes.refId}`

  return (
    <Container maxWidth="sm">
      <CardMedia
        className={classes.cardSize}
        component="iframe"
        data-testid="Arclight"
        hidden
        src={arclightUrl}
      />
    </Container>
  )
}
