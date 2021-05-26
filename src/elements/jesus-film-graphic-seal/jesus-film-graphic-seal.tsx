import React, { ImgHTMLAttributes } from 'react'
import Red from './assets/red.svg'
import White from './assets/white.svg'

export type JesusFilmGraphicSealProps = {
  /** graphic seal primary color */
  variant?: 'red' | 'white'
} & ImgHTMLAttributes<HTMLImageElement>

export function JesusFilmGraphicSeal({
  variant = 'red',
  ...rest
}: JesusFilmGraphicSealProps) {
  let source: string

  switch (variant) {
    case 'red':
      source = Red
      break
    case 'white':
      source = White
      break
  }

  return <img src={source} {...rest} aria-label="jesus-film-graphic-seal" />
}
