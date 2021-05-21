import { Box } from '@material-ui/core'
import React from 'react'
import { JesusFilmGraphicSeal } from './jesus-film-graphic-seal'

export const BasicJesusFilmGraphicSeal = () => (
  <Box p={5}>
    <JesusFilmGraphicSeal />
  </Box>
)

export const RedJesusFilmGraphicSeal = () => (
  <Box p={5}>
    <JesusFilmGraphicSeal variant="red" />
  </Box>
)

export const WhiteJesusFilmGraphicSeal = () => (
  <Box p={5} style={{ backgroundColor: '#ef3340' }}>
    <JesusFilmGraphicSeal variant="white" />
  </Box>
)
