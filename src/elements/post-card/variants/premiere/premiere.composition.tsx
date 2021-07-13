import React from 'react'
import { PostCard } from '../..'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const PremierePostCard = () => (
  <JesusFilmThemeProvider>
    <PostCard
      src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
      title="His Shoes Led to Learning About Christianity"
      excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
      variant="premiere"
    />
  </JesusFilmThemeProvider>
)
