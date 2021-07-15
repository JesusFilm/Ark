import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { PostCard } from '../..'

describe('post-card-hero', () => {
  it('hero variant should be clickable', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        onClick={handleClick}
        variant="hero"
      />
    )
    fireEvent.click(getByText('Read Story'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('renders featured image and handles null cases', () => {
    const { getByTestId, rerender } = render(
      <PostCard
        featuredImage={{
          node: {
            sourceUrl:
              'https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png'
          }
        }}
        title="His Shoes Led to Learning About Christianity"
        variant="hero"
      />
    )
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundSize
    ).toEqual('cover')
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundImage
    ).toEqual(
      'url(https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png)'
    )
    rerender(
      <PostCard
        featuredImage={{
          node: {
            sourceUrl: null
          }
        }}
        title="His Shoes Led to Learning About Christianity"
        variant="hero"
      />
    )
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundSize
    ).toBeFalsy()
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundImage
    ).toBeFalsy()
    rerender(
      <PostCard
        featuredImage={{
          node: null
        }}
        title="His Shoes Led to Learning About Christianity"
        variant="hero"
      />
    )
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundSize
    ).toBeFalsy()
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundImage
    ).toBeFalsy()
    rerender(
      <PostCard
        featuredImage={null}
        title="His Shoes Led to Learning About Christianity"
        variant="hero"
      />
    )
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundSize
    ).toBeFalsy()
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundImage
    ).toBeFalsy()
  })

  it('renders category and handles null cases', () => {
    const { getByText, queryByTestId, rerender } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        categories={{
          nodes: []
        }}
        variant="hero"
      />
    )
    expect(queryByTestId('category')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        categories={{
          nodes: null
        }}
        variant="hero"
      />
    )
    expect(queryByTestId('category')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        categories={null}
        variant="hero"
      />
    )
    expect(queryByTestId('category')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        categories={{
          nodes: [{ name: 'This is a category' }]
        }}
        variant="hero"
      />
    )
    expect(getByText('This is a category')).toBeInTheDocument()
  })

  it('renders excerpt and handles null cases', () => {
    const { getByText, queryByTestId, rerender } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        excerpt="This is an excerpt"
        variant="hero"
      />
    )
    expect(getByText('This is an excerpt')).toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        excerpt={null}
        variant="hero"
      />
    )
    expect(queryByTestId('excerpt')).not.toBeInTheDocument()
  })
})
