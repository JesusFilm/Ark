import React, { ImgHTMLAttributes } from 'react'

export type JesusFilmBrandmarkProps = {
  variant?:
    | 'red'
    | 'cool-gray'
    | 'red-cool-gray'
    | 'red-warm-gray'
    | 'warm-white'
    | 'white'
} & ImgHTMLAttributes<HTMLImageElement>

export function JesusFilmBrandmark({
  variant = 'red',
  ...rest
}: JesusFilmBrandmarkProps) {
  let source: string

  switch (variant) {
    case 'red':
      source = require('./assets/red.png')
      break
    case 'cool-gray':
      source = require('./assets/cool-gray.png')
      break
    case 'red-cool-gray':
      source = require('./assets/red-cool-gray.png')
      break
    case 'red-warm-gray':
      source = require('./assets/red-warm-gray.png')
      break
    case 'warm-white':
      source = require('./assets/warm-white.png')
      break
    case 'white':
      source = require('./assets/white.png')
      break
  }

  return <img src={source} {...rest} aria-label="jesus-film-brandmark" />
}
