import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  cardSize: {
    height: '300px',
    margin: theme.spacing(3, 0)
  }
}))

type Attributes = {
  url: string
  providerNameSlug: string
}

export type VimeoProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
}

function extractVimeoId(url): string {
  const regExp =
    /^.*((vimeo.com\/)|(v\/)|(\/u\/\w\/)|(video\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)

  if (match && match[7]) {
    return match[7]
  }
}

export function Vimeo({ attributes }: VimeoProps) {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <CardMedia
        data-testid={attributes.providerNameSlug}
        className={classes.cardSize}
        component="iframe"
        src={`https://player.vimeo.com/video/${extractVimeoId(attributes.url)}`}
      />
    </Container>
  )
}
