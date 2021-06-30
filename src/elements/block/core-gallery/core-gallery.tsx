import React from 'react'
import {
  createStyles,
  makeStyles,
  GridList,
  GridListTile
} from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      maxWidth: '100%'
    },
    grid: {
      maxWidth: '960px'
    }
  })
)

type Attributes = {
  /** Image */
  images: Image[]
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
  /** Variant style */
  name: 'core/gallery'
}

export function CoreGallery({ attributes: { images } }: CoreGalleryProps) {
  const classes = useStyles()
  return (
    <GridList
      data-testid="galleryVariant"
      cellHeight={160}
      cols={4}
      className={classes.grid}>
      {images.map((image, i) => (
        <GridListTile key={`${i}-image-gallery`} cols={2} rows={1}>
          <img src={image.fullUrl} alt={image.alt} className={classes.image} />
        </GridListTile>
      ))}
    </GridList>
  )
}
