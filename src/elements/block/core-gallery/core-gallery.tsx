import React from 'react'
import { GridList, GridListTile, Container } from '@material-ui/core'

type Attributes = {
  /** Image */
  images?: Image[]
}

type Image = {
  /** Full Url */
  fullUrl: string
  /** Image alt tag */
  alt: string
}

export type CoreGalleryProps = {
  /**
   * container for image attributes
   */
  attributes: Attributes
  __typename: 'CoreGalleryBlock'
}

export function CoreGallery({ attributes: { images } }: CoreGalleryProps) {
  return images ? (
    <Container maxWidth="md">
      <GridList data-testid="CoreGalleryBlock" cellHeight={160} cols={4}>
        {images?.map((image, i) => (
          <GridListTile key={`${i}-image-gallery`} cols={2} rows={1}>
            <img src={image.fullUrl} alt={image.alt} />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  ) : null
}
