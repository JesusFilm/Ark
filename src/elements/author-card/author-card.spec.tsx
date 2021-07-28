import React from 'react'
import { render } from '@testing-library/react'
import { AuthorCard } from '.'

describe('author-card', () => {
  it('should render author name', () => {
    const { getByText } = render(
      <AuthorCard
        name="Tez Brooks"
        slug="tez-brooks"
        avatar={{
          url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg'
        }}
        description="Award winning author, screenwriter and international speaker"
      />
    )
    expect(getByText('Tez Brooks')).toBeInTheDocument()
  })
  it('should render author link', () => {
    const { getByTestId } = render(
      <AuthorCard
        name="Tez Brooks"
        slug="tez-brooks"
        avatar={{
          url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg'
        }}
        description="Award winning author, screenwriter and international speaker"
        AuthorLink={(props) => (
          <a href="tez-brooks" data-testid="author-link" />
        )}
      />
    )
    const link = getByTestId('author-link')
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('tez-brooks')
  })
})
