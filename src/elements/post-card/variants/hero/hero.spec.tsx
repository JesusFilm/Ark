import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '../..'

describe('post-card-hero', () => {
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
        categories={null}
        variant="hero"
      />
    )
    expect(queryByTestId('category')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="his-shoes-led-to-learning-about-christianity"
        categories={{
          nodes: [
            {
              name: 'This is a category',
              slug: 'this-is-a-category'
            }
          ]
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
        slug="his-shoes-led-to-learning-about-christianity"
        excerpt="This is an excerpt"
        variant="hero"
      />
    )
    expect(getByText('This is an excerpt')).toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="his-shoes-led-to-learning-about-christianity"
        excerpt={null}
        variant="hero"
      />
    )
    expect(queryByTestId('excerpt')).not.toBeInTheDocument()
  })

  it('renders custom post link', () => {
    const { getByTestId } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="post-slug"
        PostLink={(props) => (
          <a {...props} href={`/posts/${props.href}`} data-testid="post-link" />
        )}
        variant="hero"
      />
    )
    const link = getByTestId('post-link')
    expect(link).toBeInTheDocument()
    expect(link.textContent).toEqual('Read Story')
    expect(link.getAttribute('href')).toEqual('/posts/post-slug')
  })

  it('renders custom category link', () => {
    const { getByTestId } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="his-shoes-led-to-learning-about-christianity"
        categories={{
          nodes: [
            {
              name: 'Reaching the Nations',
              slug: 'reaching-the-nations'
            }
          ]
        }}
        CategoryLink={(props) => (
          <a
            {...props}
            href={`/categories/${props.href}`}
            data-testid="category-link"
          />
        )}
        variant="hero"
      />
    )
    const link = getByTestId('category-link')
    expect(link).toBeInTheDocument()
    expect(link.textContent).toEqual('Reaching the Nations')
    expect(link.getAttribute('href')).toEqual(
      '/categories/reaching-the-nations'
    )
  })
})
