import React from 'react'
import { Container, CardMedia, makeStyles } from '@material-ui/core'
import { Default, DefaultProps } from './embed/default'
import { Youtube } from './embed/youtube'
import { Vimeo } from './embed/vimeo'

const useStyles = makeStyles((theme) => ({
  cardSize: {
    height: '300px',
    margin: theme.spacing(3, 0)
  }
}))

type Attributes = {
  // Embed URL
  url: string
  providerNameSlug: string
}

export type CoreEmbedProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
  /** Variant style */
  __typename: 'CoreEmbedBlock'
  defaultProps: DefaultProps
}

export function CoreEmbed({ attributes, defaultProps }: CoreEmbedProps) {
  const classes = useStyles()

  switch (attributes.providerNameSlug) {
    case 'youtube':
      // update the passing of props later
      return <Youtube attributes={attributes} __typename="CoreEmbedBlock" />
    case 'embed-handler':
      return (
        <Container maxWidth="sm">
          <CardMedia
            data-testid="CoreEmbedBlock"
            className={classes.cardSize}
            component="iframe"
            src={attributes.url}
          />
        </Container>
      )
    case 'vimeo':
      // update the passing of props later
      return <Vimeo attributes={attributes} __typename="CoreEmbedBlock" />
    default:
      return <Default {...defaultProps} />
  }
}
