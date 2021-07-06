import React from 'react'
import { CoreList, CoreListProps } from './core-list'
import { CoreImage, CoreImageProps } from './core-image'
import { CoreParagraph, CoreParagraphProps } from './core-paragraph'
import { CoreHeading, CoreHeadingProps } from './core-heading'
import { CoreGallery, CoreGalleryProps } from './core-gallery'
import { CoreQuote, CoreQuoteProps } from './core-quote'

export type BlockProps =
  | CoreParagraphProps
  | CoreImageProps
  | CoreHeadingProps
  | CoreListProps
  | CoreGalleryProps
  | CoreQuoteProps

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
    case 'CoreQuoteBlock':
      return <CoreQuote {...BlockProps} />
  }
}
