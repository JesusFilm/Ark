import React from 'react'
import { render } from '@testing-library/react'
import { PostHeader } from '.'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'
import { intlFormat, parseISO } from 'date-fns'

describe('post-header', () => {
  it('renders title', () => {
    const { getByText } = render(<PostHeader title="custom title" />)
    expect(getByText('custom title')).toBeInTheDocument()
  })

  it('renders excerpt', () => {
    const { getByText } = render(<PostHeader excerpt="custom excerpt" />)
    expect(getByText('custom excerpt')).toBeInTheDocument()
  })

  it('renders category', () => {
    const { queryByTestId, getByTestId, rerender } = render(
      <PostHeader categories={null} />
    )
    expect(queryByTestId('category')).not.toBeInTheDocument()
    rerender(
      <PostHeader
        categories={{
          nodes: [
            {
              name: 'Following Jesus'
            }
          ]
        }}
      />
    )
    expect(getByTestId('category').textContent).toEqual(
      'Published under "Following Jesus"'
    )
    rerender(
      <PostHeader
        categories={{
          nodes: [
            {
              name: 'Following Jesus'
            }
          ]
        }}
        CategoryLink={(props) => (
          <a {...props} href="/following-jesus" data-testid="category-link" />
        )}
      />
    )
    const categoryLink = getByTestId('category-link')
    expect(categoryLink.getAttribute('href')).toEqual('/following-jesus')
    expect(categoryLink.textContent).toEqual('Following Jesus')
  })

  it('renders category and date', () => {
    const date = '2021-06-15T22:00:35.664Z'
    const prettyDate = intlFormat(
      parseISO(date),
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      {
        locale: Intl.DateTimeFormat().resolvedOptions().locale
      }
    )
    const { getByTestId, rerender } = render(
      <I18nProvider>
        <PostHeader
          categories={{
            nodes: [
              {
                name: 'Following Jesus'
              }
            ]
          }}
          date={date}
        />
      </I18nProvider>
    )
    expect(getByTestId('category-and-date').textContent).toEqual(
      `Published under "Following Jesus" on ${prettyDate}`
    )
    rerender(
      <PostHeader
        categories={{
          nodes: [
            {
              name: 'Following Jesus'
            }
          ]
        }}
        CategoryLink={(props) => (
          <a {...props} href="/following-jesus" data-testid="category-link" />
        )}
      />
    )
    const categoryLink = getByTestId('category-link')
    expect(categoryLink.getAttribute('href')).toEqual('/following-jesus')
    expect(categoryLink.textContent).toEqual('Following Jesus')
  })

  it('renders date', () => {
    const date = '2021-06-15T22:00:35.664Z'
    const prettyDate = intlFormat(
      parseISO(date),
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      {
        locale: Intl.DateTimeFormat().resolvedOptions().locale
      }
    )
    const { getByTestId, rerender } = render(
      <I18nProvider>
        <PostHeader categories={null} date={date} />
      </I18nProvider>
    )
    expect(getByTestId('date')).toBeInTheDocument()
    rerender(
      <I18nProvider>
        <PostHeader date={date} />
      </I18nProvider>
    )
    expect(getByTestId('date').textContent).toEqual(
      `Published on ${prettyDate}`
    )
  })

  it('renders author', () => {
    const { getByTestId, queryByTestId, rerender } = render(<PostHeader />)
    expect(queryByTestId('author')).not.toBeInTheDocument()
    rerender(<PostHeader author={null} />)
    expect(queryByTestId('author')).not.toBeInTheDocument()
    rerender(
      <PostHeader
        author={{
          node: {
            name: 'Josh McDowell'
          }
        }}
      />
    )
    expect(getByTestId('author').textContent).toEqual('By Josh McDowell')
    rerender(
      <PostHeader
        author={{
          node: {
            name: 'Josh McDowell'
          }
        }}
        AuthorLink={(props) => (
          <a {...props} href="/josh-mcdowell" data-testid="author-link" />
        )}
      />
    )
    const authorLink = getByTestId('author-link')
    expect(authorLink.getAttribute('href')).toEqual('/josh-mcdowell')
    expect(authorLink.textContent).toEqual('Josh McDowell')
  })

  it('renders featured image', () => {
    const { getByTestId, rerender } = render(
      <PostHeader
        featuredImage={{
          node: { sourceUrl: 'https://source.unsplash.com/random/1920x1080' }
        }}
        categories={{
          nodes: [
            {
              name: 'Following Jesus'
            }
          ]
        }}
        CategoryLink={(props) => <a {...props} data-testid="category-link" />}
        author={{
          node: {
            name: 'Bob Jones'
          }
        }}
        AuthorLink={(props) => <a {...props} data-testid="author-link" />}
      />
    )
    expect(getComputedStyle(getByTestId('category-link')).color).toEqual(
      'rgb(255, 255, 255)'
    )
    expect(getComputedStyle(getByTestId('author-link')).color).toEqual(
      'rgb(255, 255, 255)'
    )
    expect(
      getComputedStyle(getByTestId('featured-image')).backgroundImage
    ).toEqual('url(https://source.unsplash.com/random/1920x1080)')
    rerender(
      <PostHeader
        featuredImage={{
          node: { sourceUrl: 'https://source.unsplash.com/random/1920x1080' }
        }}
        categories={{
          nodes: [
            {
              name: 'Following Jesus'
            }
          ]
        }}
        CategoryLink={(props) => <a {...props} data-testid="category-link" />}
        date="2021-06-15T22:00:35.664Z"
      />
    )
    expect(getByTestId('category-and-date')).toBeInTheDocument()
    expect(getComputedStyle(getByTestId('category-link')).color).toEqual(
      'rgb(255, 255, 255)'
    )
  })
})
