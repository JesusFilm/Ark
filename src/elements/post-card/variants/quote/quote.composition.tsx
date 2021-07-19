import React from 'react'
import { PostCard } from '../..'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const QuotePostCard = () => (
  <JesusFilmThemeProvider>
    <PostCard
      title="His Shoes Led to Learning About Christianity"
      slug="his-shoes-led-to-learning-about-christianity"
      customPostFields={{
        quote:
          'If you can?” said Jesus. "Everything is possible for one who believes."'
      }}
      date="2021-06-15T22:00:35.664Z"
      variant="quote"
    />
  </JesusFilmThemeProvider>
)
