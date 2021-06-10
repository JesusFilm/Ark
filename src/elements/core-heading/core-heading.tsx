import React from 'react'
import { Typography } from '@material-ui/core'

type Attributes = {
  /** Heading size */
  level: Number
  /** Heading content */
  content: string
}

export type CoreHeadingProps = {
  /**
   * container for heading attributes
   */
  attributes: Attributes
  /** Variant style */
  name: 'core/heading'
}

export function CoreHeading({
  attributes: { level, content }
}: CoreHeadingProps) {
  return (
    <Typography data-testid="headingVariant" variant={`h${level}`} gutterBottom>
      {content}
    </Typography>
  )
}
