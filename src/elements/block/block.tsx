import React from 'react'
import { CoreList, CoreListProps } from '@jesus-film/ark.elements.core-list'
import { CoreImage, CoreImageProps } from '@jesus-film/ark.elements.core-image'
import {
  CoreParagraph,
  CoreParagraphProps
} from '@jesus-film/ark.elements.core-paragraph'
import {
  CoreHeading,
  CoreHeadingProps
} from '@jesus-film/ark.elements.core-heading'
import {
  CoreGallery,
  CoreGalleryProps
} from '@jesus-film/ark.elements.core-gallery'

export type BlockProps =
  | CoreParagraphProps
  | CoreImageProps
  | CoreHeadingProps
  | CoreListProps
  | CoreGalleryProps

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
  }
}
