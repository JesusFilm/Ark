import React, { ImgHTMLAttributes } from 'react'
import Red from './assets/red.png'
import CoolGray from './assets/cool-gray.png'
import WarmWhite from './assets/warm-white.png'
import White from './assets/white.png'

export type JesusFilmSymbolProps = {
  variant?: 'red' | 'cool-gray' | 'warm-white' | 'white'
} & ImgHTMLAttributes<HTMLImageElement>

export function JesusFilmSymbol ({ variant = 'red', ...rest }: JesusFilmSymbolProps) {
  let source: string

  switch (variant) {
    case 'red':
      source = Red
      break
    case 'cool-gray':
      source = CoolGray
      break
    case 'warm-white':
      source = WarmWhite
      break
    case 'white':
      source = White
      break
  }

  return (
    <img src={source} {...rest} aria-label='jesus-film-symbol' />
  )
}
