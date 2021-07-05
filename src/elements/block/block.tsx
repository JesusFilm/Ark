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
  switch (BlockProps.name) {
    case 'core/image':
      return <CoreImage {...BlockProps} />
    case 'core/paragraph':
      return <CoreParagraph {...BlockProps} />
    case 'core/heading':
      return <CoreHeading {...BlockProps} />
    case 'core/list':
      return <CoreList {...BlockProps} />
    case 'core/gallery':
      return <CoreGallery {...BlockProps} />
    case 'core/quote':
      return <CoreQuote {...BlockProps} />
  }
}