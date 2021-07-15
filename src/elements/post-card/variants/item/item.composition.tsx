import React from 'react'
import { PostCard } from '../..'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const ItemPostCardNoImage = () => (
  <JesusFilmThemeProvider>
    <PostCard
      title="His Shoes Led to Learning About Christianity"
      variant="item"
      author={{
        node: {
          name: 'Ryan Johnson'
        }
      }}
    />
  </JesusFilmThemeProvider>
)

export const ItemPostCardNoAuthor = () => (
  <JesusFilmThemeProvider>
    <PostCard
      title="His Shoes Led to Learning About Christianity"
      featuredImage={{
        node: {
          sourceUrl: 'https://source.unsplash.com/random/1920x1080'
        }
      }}
      variant="item"
    />
  </JesusFilmThemeProvider>
)

export const ItemPostCard = () => (
  <JesusFilmThemeProvider>
    <PostCard
      featuredImage={{
        node: {
          sourceUrl: 'https://source.unsplash.com/random/1920x1080'
        }
      }}
      title="A Behind the Scenes Glimpse at Film Production"
      variant="item"
      author={{
        node: {
          name: 'Ryan Johnson'
        }
      }}
    />
  </JesusFilmThemeProvider>
)
