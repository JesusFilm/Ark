import React from 'react'
import { render } from '@testing-library/react'
import { PostHeader } from '.'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'

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
      <PostHeader category={null} />
    )
    expect(queryByTestId('category')).not.toBeInTheDocument()
    rerender(<PostHeader category="Following Jesus" />)
    expect(getByTestId('category').textContent).toEqual(
      'Published under "Following Jesus"'
    )
    rerender(
      <PostHeader
        category="Following Jesus"
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
    const { getByTestId, rerender } = render(
      <I18nProvider>
        <PostHeader
          category="Following Jesus"
          date="2021-06-15T22:00:35.664Z"
        />
      </I18nProvider>
    )
    expect(getByTestId('category-and-date').textContent).toEqual(
      'Published under "Following Jesus" on June 15, 2021'
    )
    rerender(
      <PostHeader
        category="Following Jesus"
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
    const { getByTestId, rerender } = render(
      <I18nProvider>
        <PostHeader category={null} date="2021-06-15T22:00:35.664Z" />
      </I18nProvider>
    )
    expect(getByTestId('date')).toBeInTheDocument()
    rerender(
      <I18nProvider>
        <PostHeader date="2021-06-15T22:00:35.664Z" />
      </I18nProvider>
    )
    expect(getByTestId('date').textContent).toEqual(
      'Published on June 15, 2021'
    )
  })

  it('renders author', () => {
    const { getByTestId, queryByTestId, rerender } = render(<PostHeader />)
    expect(queryByTestId('author')).not.toBeInTheDocument()
    rerender(<PostHeader author={null} />)
    expect(queryByTestId('author')).not.toBeInTheDocument()
    rerender(<PostHeader author="Josh McDowell" />)
    expect(getByTestId('author').textContent).toEqual('By Josh McDowell')
    rerender(
      <PostHeader
        author="Josh McDowell"
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
        src="https://source.unsplash.com/random/1920x1080"
        category="Following Jesus"
        CategoryLink={(props) => <a {...props} data-testid="category-link" />}
        author="Bob Jones"
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
        src="https://source.unsplash.com/random/1920x1080"
        category="Following Jesus"
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
