import React from 'react'
import { render } from '@testing-library/react'
import { BasicPost } from './post.composition'
import { I18nProvider } from '../../providers/i18n-provider'

it('should render with the correct text', () => {
  const { getByText } = render(
    <I18nProvider>
      <BasicPost />
    </I18nProvider>
  )
  expect(getByText('The parables from Matthew')).toBeInTheDocument()
})
