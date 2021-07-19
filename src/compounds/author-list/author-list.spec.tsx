import React from 'react'
import { render } from '@testing-library/react'
import { AuthorList } from '.'

describe('author-list', () => {
  it('should render the name of the author', () => {
    const { getByText } = render(
      <AuthorList
        authors={[
          {
            name: 'Tez Brooks',
            description:
              'Award winning author, screenwriter and international speaker',
            src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg',
            onClick: () => alert('Clicked Tex')
          },
          {
            name: 'Raeli Miller',
            description:
              'Reali Miller is the Community and Content Digital Strategist for Jesus Film Project',
            src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/rs.jpg',
            onClick: () => alert('Clicked Raeli')
          }
        ]}
        title=""
      />
    )
    expect(getByText('Tez Brooks')).toBeInTheDocument()
  })

  it('should render the list header', () => {
    const { getByText } = render(
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
        title="Authors"
        onSeeAllClick={() => alert('See All')}
      />
    )
    expect(getByText('Authors')).toBeInTheDocument()
  })
})
