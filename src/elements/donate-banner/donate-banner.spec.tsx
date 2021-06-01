import React from 'react'
import { render } from '@testing-library/react'
import { DonateBanner } from './donate-banner'

describe('donateBanner', () => {
  it('should render with the correct link', () => {
    const { getByRole } = render(<DonateBanner />)
    expect(getByRole('link', { name: 'Donate' }).getAttribute('href')).toEqual(
      'https://www.jesusfilm.org/how-to-help/ways-to-donate/give-now.html?amount=&frequency=single&campaign=NXWJPO&designation=2592320&thankYouRedirect=https:%2F%2Fwww.jesusfilm.org%2Fspecial%2Fthank-you.html'
    )
  })
})
