import React from 'react'
import { PostCoreHeading } from './post-core-heading'
import { JesusFilmThemeProvider } from '../../providers/jesus-film-theme-provider'

export const BasicPostCoreHeading = () => (
  <JesusFilmThemeProvider>
    <PostCoreHeading
      blocks={{
        __typename: 'CoreHeadingBlock',
        attributes: {
          content: '3. The Parable of the Wise and Foolish Builders'
        }
      }}
    />
  </JesusFilmThemeProvider>
)
