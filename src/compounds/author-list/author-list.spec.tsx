import React from 'react'
import { render } from '@testing-library/react'
import { AuthorList } from '.'

describe('author-list', () => {
  it('should render the name of the author', () => {
    const { getByText } = render(
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
    )
    expect(getByText('Tez Brooks')).toBeInTheDocument()
  })

  it('should render the list header', () => {
    const { getByText } = render(
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
          }
        ]}
        title="Authors"
        onSeeAllClick={() => alert('See All')}
      />
    )
    expect(getByText('Authors')).toBeInTheDocument()
  })
})
