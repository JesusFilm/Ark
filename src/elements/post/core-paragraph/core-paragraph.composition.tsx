import React from 'react'
import { CoreParagraph } from './core-paragraph'
import { JesusFilmThemeProvider } from '../../../providers/jesus-film-theme-provider'

export const BasicCoreParagraph = () => (
  <JesusFilmThemeProvider>
    <CoreParagraph
      block={{
        __typename: 'CoreParagraphBlock',
        attributes: {
          content:
            "When people talk about the ministry of Jesus, it's easy to focus on his miracles. Jesus performed some amazing feats that the world had never seen (and hasn’t seen since). But one of the most exciting things about His ministry was His teaching style."
        }
      }}
    />
  </JesusFilmThemeProvider>
)
