import React, { ImgHTMLAttributes } from 'react'

export type JesusFilmSymbolProps = {
  variant?: 'red' | 'cool-gray' | 'warm-white' | 'white'
} & ImgHTMLAttributes<HTMLImageElement>

export function JesusFilmSymbol({
  variant = 'red',
  ...rest
}: JesusFilmSymbolProps) {
  let source: string

  switch (variant) {
    case 'red':
      source = require('./assets/red.png')
      break
    case 'cool-gray':
      source = require('./assets/cool-gray.png')
      break
    case 'warm-white':
      source = require('./assets/warm-white.png')
      break
    case 'white':
      source = require('./assets/white.png')
      break
  }

  return <img src={source} {...rest} aria-label="jesus-film-symbol" />
}
