import React from 'react'
import { Typography, TypographyVariant } from '@material-ui/core'

type Attributes = {
  /** Heading size */
  level: Number
  /** Heading content */
  content: string
  /** align is sometimes supplied as an empty string from WP */
  align: 'inherit' | 'left' | 'center' | 'right' | 'justify' | ''
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
  attributes: { level, content, align }
}: CoreHeadingProps) {
  const variant = `h${level}` as TypographyVariant
  const normalized = align === '' ? 'inherit' : align
  return (
    <Typography
      data-testid="headingVariant"
      variant={variant}
      gutterBottom
      align={normalized}
      style={{ paddingTop: '20px', paddingBottom: '10px' }}>
      {content}
    </Typography>
  )
}
