import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '../..'

describe('post-card-item', () => {
  it('render featuredImage and handle null cases', () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
        featuredImage={{
          node: {
            sourceUrl:
              'https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png'
          }
        }}
      />
    )
    expect(getByTestId('featured-image').getAttribute('src')).toEqual(
      'https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png'
    )
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
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
        variant="item"
        featuredImage={{
          node: null
        }}
      />
    )
    expect(queryByTestId('featured-image')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
        featuredImage={null}
      />
    )
    expect(queryByTestId('featured-image')).not.toBeInTheDocument()
  })

  it('render author and handle null cases', () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
        author={{
          node: {
            name: 'James Bond'
          }
        }}
      />
    )
    expect(getByTestId('author').textContent).toEqual('James Bond')
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
        author={{
          node: {
            name: null
          }
        }}
      />
    )
    expect(queryByTestId('author')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
        author={{
          node: null
        }}
      />
    )
    expect(queryByTestId('author')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
        author={null}
      />
    )
    expect(queryByTestId('author')).not.toBeInTheDocument()
  })

  it('render title', () => {
    const { getByText } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
      />
    )
    expect(
      getByText('His Shoes Led to Learning About Christianity')
    ).toBeInTheDocument()
  })
})
