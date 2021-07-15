import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '../..'

describe('post-card-premiere', () => {
  it('renders excerpt and handles null case', () => {
    const { getByText, queryByTestId, rerender } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        excerpt="This is an excerpt"
        variant="premiere"
      />
    )
    expect(getByText('This is an excerpt')).toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        excerpt={null}
        variant="premiere"
      />
    )
    expect(queryByTestId('excerpt')).not.toBeInTheDocument()
  })

  it('renders featured image and handles null case', () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        featuredImage={{
          node: {
            sourceUrl:
              'https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png'
          }
        }}
        variant="premiere"
      />
    )
    expect(getByTestId('featured-image').getAttribute('src')).toEqual(
      'https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png'
    )
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="premiere"
        featuredImage={{
          node: {
            sourceUrl: null
          }
        }}
      />
    )
    expect(queryByTestId('featured-image')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="premiere"
        featuredImage={{
          node: null
        }}
      />
    )
    expect(queryByTestId('featured-image')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="premiere"
        featuredImage={null}
      />
    )
    expect(queryByTestId('featured-image')).not.toBeInTheDocument()
  })
})
