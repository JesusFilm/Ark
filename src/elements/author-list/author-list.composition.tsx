import React from 'react'
import { AuthorList } from '.'

export const BasicAuthorList = () => (
  <AuthorList
    authors={[
      {
        name: 'Tez Brooks',
        description:
          'Award winning author, screenwriter and international speaker',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg'
      },
      {
        name: 'Raeli Miller',
        description:
          'Raeli Miller is the Community and Content Digital Strategist for Jesus Film Project.',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg'
      },
      {
        name: 'Josh McDowell',
        description:
          'On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trens and ground-breaking minsitry for over five decades.',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/josh-mcdowell.jpg'
      },
      {
        name: 'Holly Newell',
        description:
          'Holly and her husband Josh live in Orlando, Florida where Josh is serving as executive director of Jesus Film Project',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/holly-newell.jpeg'
      }
    ]}
    title="Authors"
  />
)

export const EmptyAuthorList = () => <AuthorList authors={[]} title="" />
