import React from 'react'
import { render } from '@testing-library/react'
import { BasicPost } from './post.composition'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'

// Write more test that check if data is coming our from the different components
it('should render with the correct text', () => {
  const { getByText } = render(
    <I18nProvider>
      <BasicPost />
    </I18nProvider>
  )
  expect(getByText('The parables from Matthew')).toBeInTheDocument()
})
