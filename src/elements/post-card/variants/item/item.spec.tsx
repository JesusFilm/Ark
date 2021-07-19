import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '../..'

describe('post-card-item', () => {
  it('render featuredImage and handle null cases', () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
        variant="item"
        author={{
          node: {
            name: 'James Bond',
            slug: 'ryan-johnson'
          }
        }}
      />
    )
    expect(getByTestId('author').textContent).toEqual('James Bond')
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="his-shoes-led-to-learning-about-christianity"
        variant="item"
        author={{
          node: {
            name: null,
            slug: null
          }
        }}
      />
    )
    expect(queryByTestId('author')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
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
        slug="his-shoes-led-to-learning-about-christianity"
        variant="item"
      />
    )
    expect(
      getByText('His Shoes Led to Learning About Christianity')
    ).toBeInTheDocument()
  })

  it('renders custom post link', () => {
    const { getByTestId } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="post-slug"
        PostLink={(props) => (
          <a {...props} href={`/posts/${props.href}`} data-testid="post-link" />
        )}
        variant="item"
      />
    )
    const link = getByTestId('post-link')
    expect(link).toBeInTheDocument()
    expect(link.textContent).toEqual(
      'His Shoes Led to Learning About Christianity'
    )
    expect(link.getAttribute('href')).toEqual('/posts/post-slug')
  })

  it('renders custom author link', () => {
    const { getByTestId } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="his-shoes-led-to-learning-about-christianity"
        author={{
          node: {
            name: 'Ryan Johnson',
            slug: 'ryan-johnson'
          }
        }}
        AuthorLink={(props) => (
          <a
            {...props}
            href={`/authors/${props.href}`}
            data-testid="author-link"
          />
        )}
        variant="item"
      />
    )
    const link = getByTestId('author-link')
    expect(link).toBeInTheDocument()
    expect(link.textContent).toEqual('Ryan Johnson')
    expect(link.getAttribute('href')).toEqual('/authors/ryan-johnson')
  })

  it('renders divider', () => {
    const { getByTestId, queryByTestId, rerender } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="post-slug"
        variant="item"
      />
    )
    expect(queryByTestId('divider')).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        slug="post-slug"
        variant="item"
        divider
      />
    )
    expect(getByTestId('divider')).toBeInTheDocument()
  })
})
