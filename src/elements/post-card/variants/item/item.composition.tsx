import React from 'react'
import { PostCard } from '../..'
import { JesusFilmThemeProvider } from '../../../../providers/jesus-film-theme-provider'

export const ItemPostCardNoImage = () => (
  <JesusFilmThemeProvider>
    <PostCard
      title="His Shoes Led to Learning About Christianity"
      variant="item"
      author="Jill Hadlock"
    />
  </JesusFilmThemeProvider>
)

export const ItemPostCardNoImageNoAuthor = () => (
  <JesusFilmThemeProvider>
    <PostCard
      title="His Shoes Led to Learning About Christianity"
      variant="item"
    />
  </JesusFilmThemeProvider>
)

export const ItemPostCard = () => (
  <JesusFilmThemeProvider>
    <PostCard
      src="https://source.unsplash.com/random/1920x1080"
      title="A Behind the Scenes Glimpse at Film Production"
      variant="item"
      author="Micheal Allen"
    />
  </JesusFilmThemeProvider>
)
