import React from 'react'
import { Container, Typography, TypographyVariant } from '@material-ui/core'

type Attributes = {
  /** Heading size */
  level?: Number
  /** Heading content */
  content?: string
  /** align is sometimes supplied as an empty string from WP */
  align?: string
}

export type CoreHeadingProps = {
  /**
   * container for heading attributes
   */
  attributes: Attributes
  __typename: 'CoreHeadingBlock'
}

export function CoreHeading({
  attributes: { level, content, align }
}: CoreHeadingProps) {
  const variant = `h${level}` as TypographyVariant
  const normalized = (
    ['inherit', 'left', 'center', 'right', 'justify'].includes(align)
      ? align
      : 'inherit'
  ) as 'inherit' | 'left' | 'center' | 'right' | 'justify'

  return (
    <Container maxWidth="sm">
      <Typography
        data-testid="CoreHeadingBlock"
        variant={variant}
        gutterBottom
        align={normalized}>
        {content}
      </Typography>
    </Container>
  )
}
