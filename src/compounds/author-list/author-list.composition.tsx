import React from 'react'
import { AuthorList } from '.'
import { JesusFilmThemeProvider } from '../../providers/jesus-film-theme-provider'

export const BasicAuthorList = () => (
  <JesusFilmThemeProvider>
    <AuthorList
      authors={[
        {
          author: {
            node: {
              name: 'Tez Brooks',
              slug: 'tez-brooks',
              avatar: {
                url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg'
              },
              description:
                'Award winning author, screenwriter and international speaker'
            }
          }
        },
        {
          author: {
            node: {
              name: 'Raeli Miller',
              slug: 'raeli-miller',
              avatar: {
                url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg'
              },
              description:
                'Raeli Miller is the Community and Content Digital Strategist for Jesus Film Project.'
            }
          }
        },
        {
          author: {
            node: {
              name: 'Josh McDowell',
              slug: 'josh-mcdowell',
              avatar: {
                url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/josh-mcdowell.jpg'
              },
              description:
                'On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades.'
            }
          }
        }
      ]}
      title=""
    />
  </JesusFilmThemeProvider>
)
export const AuthorListHeader = () => (
  <JesusFilmThemeProvider>
    <AuthorList
      authors={[
        {
          author: {
            node: {
              name: 'Tez Brooks',
              slug: 'tez-brooks',
              avatar: {
                url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg'
              },
              description:
                'Award winning author, screenwriter and international speaker'
            }
          }
        },
        {
          author: {
            node: {
              name: 'Raeli Miller',
              slug: 'raeli-miller',
              avatar: {
                url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg'
              },
              description:
                'Raeli Miller is the Community and Content Digital Strategist for Jesus Film Project.'
            }
          }
        },
        {
          author: {
            node: {
              name: 'Josh McDowell',
              slug: 'josh-mcdowell',
              avatar: {
                url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/josh-mcdowell.jpg'
              },
              description:
                'On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades.'
            }
          }
        },
        {
          author: {
            node: {
              name: 'Holly Newell',
              slug: 'holly-newell',
              avatar: {
                url: 'https://www.jesusfilm.org/content/dam/jesusfilm/holly-newell.jpeg'
              },
              description:
                'Holly and her husband Josh live in Orlando, Florida where Josh is serving as executive director of Jesus Film Project'
            }
          }
        }
      ]}
      title="Authors"
      onSeeAllClick={() => alert('See All')}
    />
  </JesusFilmThemeProvider>
)

export const EmptyAuthorList = () => <AuthorList authors={[]} title="" />
