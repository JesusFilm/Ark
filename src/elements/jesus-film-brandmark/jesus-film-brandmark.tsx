import React, { ImgHTMLAttributes } from 'react'
import Red from './assets/red.png'
import CoolGray from './assets/cool-gray.png'
import RedCoolGray from './assets/red-cool-gray.png'
import RedWarmGray from './assets/red-warm-gray.png'
import WarmWhite from './assets/warm-white.png'
import White from './assets/white.png'

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
      source = Red
      break
    case 'cool-gray':
      source = CoolGray
      break
    case 'red-cool-gray':
      source = RedCoolGray
      break
    case 'red-warm-gray':
      source = RedWarmGray
      break
    case 'warm-white':
      source = WarmWhite
      break
    case 'white':
      source = White
      break
  }

  return <img src={source} {...rest} aria-label="jesus-film-brandmark" />
}
