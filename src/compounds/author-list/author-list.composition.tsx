import React from 'react'
import { AuthorList } from '.'

export const BasicAuthorList = () => (
  <AuthorList
    authors={[
      {
        name: 'Tez Brooks',
        description:
          'Award winning author, screenwriter and international speaker',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg',
        onClick: () => alert('Clicked Tez')
      },
      {
        name: 'Raeli Miller',
        description:
          'Raeli Miller is the Community and Content Digital Strategist for Jesus Film Project.',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg',
        onClick: () => alert('Clicked Raeli')
      },
      {
        name: 'Josh McDowell',
        description:
          'On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades.',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/josh-mcdowell.jpg',
        onClick: () => alert('Clicked Josh')
      }
    ]}
    title=""
  />
)
export const AuthorListHeader = () => (
  <AuthorList
    authors={[
      {
        name: 'Tez Brooks',
        description:
          'Award winning author, screenwriter and international speaker',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg',
        onClick: () => alert('Clicked Tez')
      },
      {
        name: 'Raeli Miller',
        description:
          'Raeli Miller is the Community and Content Digital Strategist for Jesus Film Project.',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg',
        onClick: () => alert('Clicked Raeli')
      },
      {
        name: 'Josh McDowell',
        description:
          'On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades.',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/josh-mcdowell.jpg',
        onClick: () => alert('Clicked Josh')
      },
      {
        name: 'Holly Newell',
        description:
          'Holly and her husband Josh live in Orlando, Florida where Josh is serving as executive director of Jesus Film Project',
        src: 'https://www.jesusfilm.org/content/dam/jesusfilm/holly-newell.jpeg',
        onClick: () => alert('Clicked Holly')
      }
    ]}
    title="Authors"
    onSeeAllClick={() => alert('See All')}
  />
)

export const EmptyAuthorList = () => <AuthorList authors={[]} title="" />
