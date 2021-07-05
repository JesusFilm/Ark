import React from 'react'
import { render } from '@testing-library/react'
import { Donate } from '.'
import { I18nProvider } from '../../providers/i18n-provider'

describe('core', () => {
  it('should render donate', () => {
    const { getByRole } = render(
      <I18nProvider>
        <Donate />
      </I18nProvider>
    )
    expect(getByRole('link', { name: 'Donate' }).getAttribute('href')).toEqual(
      'https://www.jesusfilm.org/how-to-help/ways-to-donate/give-now.html?amount=&frequency=single&campaign=NXWJPO&designation=2592320&thankYouRedirect=https:%2F%2Fwww.jesusfilm.org%2Fspecial%2Fthank-you.html'
    )
  })
})
