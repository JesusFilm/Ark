import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      maxWidth: '100%'
    }
  })
)

type Attributes = {
  /** Alt tag for image */
  alt: string
  /** Image source url */
  url: string
  /** Image title */
  title: string
  /** Id of image */
  id: Number
  /** Url to link to */
  href: string
  /** alignment */
  align: string
}

export type CoreImageProps = {
  /**
   * container for image attributes
   */
  attributes: Attributes
  /** Variant style */
  name: 'core/image'
}

export function CoreImage({
  attributes: { alt, url, title, id, href, align }
}: CoreImageProps) {
  const classes = useStyles()
  return (
    <img
      data-testid="imageVariant"
      id={`${id}`}
      src={url}
      alt={alt.length > 0 ? alt : title}
      title={title}
      className={classes.image}
    />
  )
}
