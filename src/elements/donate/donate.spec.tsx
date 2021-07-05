import React from 'react'
import { render } from '@testing-library/react'
import { Donate } from '.'
import { I18nProvider } from '../../providers/i18n-provider'

describe('donateBanner', () => {
  it('should render with the correct link', () => {
    const { getByRole, getByText } = render(
      <I18nProvider>
        <Donate />
      </I18nProvider>
    )
    expect(getByRole('link', { name: 'Donate' }).getAttribute('href')).toEqual(
      'https://www.jesusfilm.org/how-to-help/ways-to-donate/give-now.html?amount=&frequency=single&campaign=NXWJPO&designation=2592320&thankYouRedirect=https:%2F%2Fwww.jesusfilm.org%2Fspecial%2Fthank-you.html'
    )
    expect(
      getByText('Reach People Digitally with the Hope of Jesus!')
    ).toBeInTheDocument()
  })
  it('should render button only', () => {
    const { getByRole, queryByText } = render(
      <I18nProvider>
        <Donate variant="button" />
      </I18nProvider>
    )
    expect(getByRole('link', { name: 'Donate' }).getAttribute('href')).toEqual(
      'https://www.jesusfilm.org/how-to-help/ways-to-donate/give-now.html?amount=&frequency=single&campaign=NXWJPO&designation=2592320&thankYouRedirect=https:%2F%2Fwww.jesusfilm.org%2Fspecial%2Fthank-you.html'
    )
    expect(
      queryByText('Reach People Digitally with the Hope of Jesus!')
    ).not.toBeInTheDocument()
  })
})
