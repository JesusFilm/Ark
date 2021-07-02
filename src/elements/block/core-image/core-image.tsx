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
  name,
  attributes: { alt, url, title, id }
}: CoreImageProps) {
  const classes = useStyles()
  return (
    <img
      data-testid={name}
      id={`${id}`}
      src={url}
      alt={alt}
      title={title}
      className={classes.image}
    />
  )
}
