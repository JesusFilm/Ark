import React from 'react'
import { render } from '@testing-library/react'
import { BannerAsPhone, BannerAsPrimary } from './banner.composition'

describe('banner', () => {
  it('should show primaryBanner', () => {
    const { getByTestId } = render(<BannerAsPrimary />)
    expect(getByTestId('primaryBanner')).toBeTruthy()
  })
  it('should show phoneBanner', () => {
    const { getByTestId } = render(<BannerAsPhone />)
    expect(getByTestId('phoneBanner')).toBeTruthy()
  })
})
