import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'
import { Error } from '../error'

const useStyles = makeStyles((theme) => ({
  smallSize: {
    height: '300px',
    margin: theme.spacing(3, 0)
  },
  mediumSize: {
    height: '500px',
    margin: theme.spacing(3, 0)
  }
}))

type Attributes = {
  url: string
  providerNameSlug: string
  align: string
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
  const vimeoId = extractVimeoId(attributes.url)
  const vimeoUrl = `https://player.vimeo.com/video/${vimeoId}`

  switch (vimeoId) {
    case undefined:
      return (
        <Error
          attributes={attributes}
          title="This is not a valid vimeo url"
          subtitle={vimeoUrl}
        />
      )
    default:
      return (
        <Container maxWidth={attributes.align === 'wide' ? 'lg' : 'sm'}>
          <CardMedia
            data-testid={attributes.providerNameSlug}
            className={
              attributes.align === 'wide'
                ? classes.mediumSize
                : classes.smallSize
            }
            component="iframe"
            src={vimeoUrl}
          />
        </Container>
      )
  }
}
