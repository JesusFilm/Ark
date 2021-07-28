import React from 'react'
import { render } from '@testing-library/react'
import { AuthorList } from '.'

describe('author-list', () => {
  it('should render the name of the author', () => {
    const { getByText, queryByText } = render(
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
    )
    expect(getByText('Tez Brooks')).toBeInTheDocument()
    expect(queryByText('Authors')).not.toBeInTheDocument()
  })

  it('should render author link', () => {
    const { getAllByTestId } = render(
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
        AuthorLink={({ href, className }) => (
          <a href={href} data-testid="author-link" className={className} />
        )}
      />
    )
    const link = getAllByTestId('author-link')
    expect(link[0]).toBeInTheDocument()
    expect(link[0]).toHaveAttribute('href', 'tez-brooks')
  })

  it('should render the list header', () => {
    const { getByText } = render(
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
        title="Authors"
        onSeeAllClick={() => alert('See All')}
      />
    )
    expect(getByText('Authors')).toBeInTheDocument()
  })
})
