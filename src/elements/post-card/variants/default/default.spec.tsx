import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '../..'
import { intlFormat, parseISO } from 'date-fns'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'

describe('post-card-default', () => {
  it('default variant should render', () => {
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
    const { getByRole, getByText } = render(
      <I18nProvider>
        <PostCard
          featuredImage={{
            node: { sourceUrl: 'https://source.unsplash.com/random/1920x1080' }
          }}
          title="Why You Should Know Your Neighbors Better, and How to Do it"
          categories={{
            nodes: [
              {
                name: 'Reaching the Nations'
              },
              {
                name: 'Following Jesus'
              }
            ]
          }}
          excerpt="Getting to know your neighbors is trending in the wrong direction. In 2019, Pew Research Center reported that 57% of Americans claimed to know some of their neighbors, and 26% said they knew most of their neighbors."
          date={date}
          variant="default"
        />
      </I18nProvider>
    )
    expect(getByRole('img')).toHaveAttribute(
      'src',
      'https://source.unsplash.com/random/1920x1080'
    )
    expect(getByRole('heading', { name: 'category' }).textContent).toEqual(
      'Reaching the Nations'
    )
    expect(getByText(prettyDate)).toBeInTheDocument()
  })

  it('should render with missing props', () => {
    const { queryByRole, rerender } = render(
      <PostCard
        title="Why You Should Know Your Neighbors Better, and How to Do it"
        featuredImage={{
          node: null
        }}
        categories={{
          nodes: []
        }}
        variant="default"
      />
    )
    expect(queryByRole('img')).not.toBeInTheDocument()
    expect(queryByRole('heading', { name: 'category' })).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="Why You Should Know Your Neighbors Better, and How to Do it"
        featuredImage={null}
        categories={{
          nodes: null
        }}
        variant="default"
      />
    )
    expect(queryByRole('img')).not.toBeInTheDocument()
    expect(queryByRole('heading', { name: 'category' })).not.toBeInTheDocument()
    rerender(
      <PostCard
        title="Why You Should Know Your Neighbors Better, and How to Do it"
        featuredImage={null}
        categories={null}
        variant="default"
      />
    )
    expect(queryByRole('img')).not.toBeInTheDocument()
    expect(queryByRole('heading', { name: 'category' })).not.toBeInTheDocument()
  })
})
