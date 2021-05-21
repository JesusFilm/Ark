import React, { ImgHTMLAttributes } from 'react'
import Red from './assets/red.png'
import RedText from './assets/red-text.svg'
import CoolGray from './assets/cool-gray.png'
import CoolGrayText from './assets/cool-gray-text.svg'
import WarmWhite from './assets/warm-white.png'
import WarmWhiteText from './assets/warm-white-text.svg'
import White from './assets/white.png'
import WhiteText from './assets/white-text.svg'

export type JesusFilmSymbolProps = {
  /** logo primary color */
  variant?: 'red' | 'cool-gray' | 'warm-white' | 'white'
  /** show Jesus text on logo */
  text?: boolean
} & ImgHTMLAttributes<HTMLImageElement>

export function JesusFilmSymbol({
  variant = 'red',
  text,
  ...rest
}: JesusFilmSymbolProps) {
  let source: string

  switch (variant) {
    case 'red':
      source = text ? RedText : Red
      break
    case 'cool-gray':
      source = text ? CoolGrayText : CoolGray
      break
    case 'warm-white':
      source = text ? WarmWhiteText : WarmWhite
      break
    case 'white':
      source = text ? WhiteText : White
      break
  }

  return <img src={source} {...rest} aria-label="jesus-film-symbol" />
}
