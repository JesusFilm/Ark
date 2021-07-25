import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '.'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'

describe('post-card', () => {
  it('should render hero', () => {
    const { getByTestId } = render(
      <I18nProvider>
        <PostCard title="abc" slug="abc" variant="hero" />
      </I18nProvider>
    )
    expect(getByTestId('heroVariant')).toBeInTheDocument()
  })
  it('should render quote', () => {
    const { getByTestId } = render(
      <I18nProvider>
        <PostCard
          customPostFields={{ quote: 'abc' }}
          date="2021-06-15T22:00:35.664Z"
          title="abc"
          slug="abc"
          variant="quote"
        />
      </I18nProvider>
    )
    expect(getByTestId('quoteVariant')).toBeInTheDocument()
  })
  it('should render item', () => {
    const { getByTestId } = render(
      <I18nProvider>
        <PostCard title="abc" slug="abc" variant="item" />
      </I18nProvider>
    )
    expect(getByTestId('itemVariant')).toBeInTheDocument()
  })
  it('should render premiere', () => {
    const { getByTestId } = render(
      <I18nProvider>
        <PostCard title="abc" slug="abc" variant="premiere" />
      </I18nProvider>
    )
    expect(getByTestId('premiereVariant')).toBeInTheDocument()
  })
  it('should render delfault', () => {
    const { getByTestId } = render(
      <I18nProvider>
        <PostCard title="abc" slug="abc" variant="default" />
      </I18nProvider>
    )
    expect(getByTestId('defaultVariant')).toBeInTheDocument()
  })
})
