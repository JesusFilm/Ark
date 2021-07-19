import React from 'react'
import { render } from '@testing-library/react'
import { PostList } from '.'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'

describe('core', () => {
  it('should render donate', () => {
    const { getByRole } = render(
      <I18nProvider>
        <PostList
          variant="default"
          posts={{ nodes: [{ slug: 'find-help', title: 'Find Help' }] }}
        />
      </I18nProvider>
    )
    expect(getByRole('link', { name: 'Find Help' })).toBeInTheDocument()
  })
})
