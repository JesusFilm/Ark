import React from 'react'
import { PostCard } from '../..'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const PremierePostCard = () => (
  <JesusFilmThemeProvider>
    <PostCard
      featuredImage={{
        node: {
          sourceUrl: 'https://source.unsplash.com/random/1920x1080'
        }
      }}
      title="His Shoes Led to Learning About Christianity"
      excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
      variant="premiere"
    />
  </JesusFilmThemeProvider>
)
