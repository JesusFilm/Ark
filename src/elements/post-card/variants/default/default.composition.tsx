import React from 'react'
import { PostCard } from '../..'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const DefaultPostCard = () => (
  <JesusFilmThemeProvider>
    <PostCard
      featuredImage={{
        node: { sourceUrl: 'https://source.unsplash.com/random/1920x1080' }
      }}
      title="Why You Should Know Your Neighbors Better, and How to Do it"
      categories={{
        nodes: [
          {
            name: 'Reaching the Nations'
          }
        ]
      }}
      excerpt="Getting to know your neighbors is trending in the wrong direction. In 2019, Pew Research Center reported that 57% of Americans claimed to know some of their neighbors, and 26% said they knew most of their neighbors."
      date="2021-06-15T22:00:35.664Z"
      variant="default"
    />
  </JesusFilmThemeProvider>
)
