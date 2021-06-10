import React from 'react'

export type CoreGalleryProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
}

export function CoreGallery({ text }: CoreGalleryProps) {
  return <div data-testid="galleryVariant">{text}</div>
}
