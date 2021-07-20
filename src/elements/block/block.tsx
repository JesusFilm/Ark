import React from 'react'
import { CoreList, CoreListProps } from './core-list'
import { CoreImage, CoreImageProps } from './core-image'
import { CoreParagraph, CoreParagraphProps } from './core-paragraph'
import { CoreHeading, CoreHeadingProps } from './core-heading'
import { CoreGallery, CoreGalleryProps } from './core-gallery'
import { CoreEmbed, CoreEmbedProps } from './core-embed'
import { CoreQuote, CoreQuoteProps } from './core-quote'
import { CoreArclight, CoreArclightProps } from './core-arclight'
import { Card, CardContent, Container, Typography } from '@material-ui/core'

export type BlockProps =
  | CoreParagraphProps
  | CoreImageProps
  | CoreHeadingProps
  | CoreListProps
  | CoreGalleryProps
  | CoreEmbedProps
  | CoreQuoteProps
  | CoreArclightProps

export function Block(BlockProps: BlockProps) {
  switch (BlockProps.__typename) {
    case 'CoreImageBlock':
      return <CoreImage {...BlockProps} />
    case 'CoreParagraphBlock':
      return <CoreParagraph {...BlockProps} />
    case 'CoreHeadingBlock':
      return <CoreHeading {...BlockProps} />
    case 'CoreListBlock':
      return <CoreList {...BlockProps} />
    case 'CoreGalleryBlock':
      return <CoreGallery {...BlockProps} />
    case 'CoreEmbedBlock':
      return <CoreEmbed {...BlockProps} />
    case 'CoreQuoteBlock':
      return <CoreQuote {...BlockProps} />
    case 'LazyblockArclightBlock':
      return <CoreArclight {...BlockProps} />
    default:
      return (
        <Container maxWidth="sm">
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2">
                The block type is currently unsupported.
              </Typography>
              <Typography color="textSecondary">
                {(BlockProps as { __typename: string }).__typename}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      )
  }
}
