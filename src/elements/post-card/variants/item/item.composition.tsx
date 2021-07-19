import React from 'react'
import { PostCard } from '../..'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'
import { Container } from '@material-ui/core'

export const ItemPostCardNoImage = () => (
  <JesusFilmThemeProvider>
    <Container maxWidth="sm">
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="his-shoes-led-to-learning-about-christianity"
        variant="item"
        author={{
          node: {
            name: 'Ryan Johnson',
            slug: 'ryan-johnson'
          }
        }}
      />
    </Container>
  </JesusFilmThemeProvider>
)

export const ItemPostCardNoAuthor = () => (
  <JesusFilmThemeProvider>
    <Container maxWidth="sm">
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="his-shoes-led-to-learning-about-christianity"
        featuredImage={{
          node: {
            sourceUrl: 'https://source.unsplash.com/random/1920x1080'
          }
        }}
        variant="item"
      />
    </Container>
  </JesusFilmThemeProvider>
)

export const ItemPostCardWithDivider = () => (
  <JesusFilmThemeProvider>
    <Container maxWidth="sm">
      <PostCard
        featuredImage={{
          node: {
            sourceUrl: 'https://source.unsplash.com/random/1920x1080'
          }
        }}
        title="A Behind the Scenes Glimpse at Film Production"
        slug="a-behind-the-scenes-glimpse-at-film-production"
        variant="item"
        author={{
          node: {
            name: 'Ryan Johnson',
            slug: 'ryan-johnson'
          }
        }}
        divider
      />
    </Container>
  </JesusFilmThemeProvider>
)

export const ItemPostCard = () => (
  <JesusFilmThemeProvider>
    <Container maxWidth="sm">
      <PostCard
        featuredImage={{
          node: {
            sourceUrl: 'https://source.unsplash.com/random/1920x1080'
          }
        }}
        title="A Behind the Scenes Glimpse at Film Production"
        slug="a-behind-the-scenes-glimpse-at-film-production"
        variant="item"
        author={{
          node: {
            name: 'Ryan Johnson',
            slug: 'ryan-johnson'
          }
        }}
      />
    </Container>
  </JesusFilmThemeProvider>
)
