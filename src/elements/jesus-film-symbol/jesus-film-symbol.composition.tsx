import React from 'react'
import { JesusFilmSymbol } from './jesus-film-symbol'

export const BasicJesusFilmSymbol = () => <JesusFilmSymbol />

export const RedJesusFilmSymbol = () => <JesusFilmSymbol variant="red" />

export const RedJesusFilmTextSymbol = () => (
  <JesusFilmSymbol variant="red" text />
)

export const CoolGrayJesusFilmSymbol = () => (
  <JesusFilmSymbol variant="cool-gray" />
)

export const CoolGrayJesusFilmTextSymbol = () => (
  <JesusFilmSymbol variant="cool-gray" text />
)

export const WarmWhiteJesusFilmSymbol = () => (
  <JesusFilmSymbol variant="warm-white" />
)

export const WarmWhiteJesusFilmTextSymbol = () => (
  <JesusFilmSymbol variant="warm-white" text />
)

export const WhiteJesusFilmSymbol = () => <JesusFilmSymbol variant="white" />

export const WhiteJesusFilmTextSymbol = () => (
  <JesusFilmSymbol variant="white" text />
)
