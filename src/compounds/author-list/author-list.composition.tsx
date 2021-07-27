import React from 'react'
import { AuthorList } from '.'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const BasicAuthorList = () => (
  <JesusFilmThemeProvider>
    <AuthorList
      authors={{
        node: [
          {
            name: 'Tez Brooks',
            slug: 'tez-brooks',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg'
            },
            description:
              'Award winning author, screenwriter and international speaker'
          },
          {
            name: 'Raeli Miller',
            slug: 'raeli-miller',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg'
            },
            description:
              'Raeli Miller is the Community and Content Digital Strategist for Jesus Film Project.'
          },
          {
            name: 'Josh McDowell',
            slug: 'josh-mcdowell',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/josh-mcdowell.jpg'
            },
            description:
              'On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades.'
          }
        ]
      }}
    />
  </JesusFilmThemeProvider>
)

export const BasicAuthorListHeader = () => (
  <JesusFilmThemeProvider>
    <AuthorList
      authors={{
        node: [
          {
            name: 'Tez Brooks',
            slug: 'tez-brooks',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg'
            },
            description:
              'Award winning author, screenwriter and international speaker'
          },
          {
            name: 'Raeli Miller',
            slug: 'raeli-miller',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg'
            },
            description:
              'Raeli Miller is the Community and Content Digital Strategist for Jesus Film Project.'
          },
          {
            name: 'Josh McDowell',
            slug: 'josh-mcdowell',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/josh-mcdowell.jpg'
            },
            description:
              'On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades.'
          },
          {
            name: 'Holly Newell',
            slug: 'holly-newell',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/holly-newell.jpeg'
            },
            description:
              'Holly and her husband Josh live in Orlando, Florida where Josh is serving as executive director of Jesus Film Project'
          }
        ]
      }}
      title="Authors"
    />
  </JesusFilmThemeProvider>
)

export const AuthorListHeader = () => (
  <JesusFilmThemeProvider>
    <AuthorList
      authors={{
        node: [
          {
            name: 'Tez Brooks',
            slug: 'tez-brooks',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg'
            },
            description:
              'Award winning author, screenwriter and international speaker'
          },
          {
            name: 'Raeli Miller',
            slug: 'raeli-miller',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg'
            },
            description:
              'Raeli Miller is the Community and Content Digital Strategist for Jesus Film Project.'
          },
          {
            name: 'Josh McDowell',
            slug: 'josh-mcdowell',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/josh-mcdowell.jpg'
            },
            description:
              'On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades.'
          },
          {
            name: 'Holly Newell',
            slug: 'holly-newell',
            avatar: {
              url: 'https://www.jesusfilm.org/content/dam/jesusfilm/holly-newell.jpeg'
            },
            description:
              'Holly and her husband Josh live in Orlando, Florida where Josh is serving as executive director of Jesus Film Project'
          }
        ]
      }}
      title="Authors"
      onSeeAllClick={() => alert('See All')}
    />
  </JesusFilmThemeProvider>
)

export const EmptyAuthorList = () => <AuthorList authors={{ node: [] }} />
