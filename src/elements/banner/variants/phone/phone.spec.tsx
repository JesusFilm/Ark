import React from 'react'
import { render } from '@testing-library/react'
import matchMediaMock from '../../../../../jest/util/match-media-mock'
import { BannerAsPhone } from '../../banner.composition'

describe('phone', () => {
  it('should show googleButton and appleButton', () => {
    const { getByRole } = render(<BannerAsPhone />)
    expect(getByRole('img', { name: 'google button' })).toBeTruthy()
    expect(getByRole('img', { name: 'apple button' })).toBeTruthy()
  })
  it('should not show googleButton and appleButton', () => {
    const { queryByRole } = render(
      <BannerAsPhone
        androidAppStoreHref={undefined}
        iosAppStoreHref={undefined}
      />
    )
    expect(queryByRole('img', { name: 'google button' })).not.toBeTruthy()
    expect(queryByRole('img', { name: 'apple button' })).not.toBeTruthy()
  })

  it('should show title as h4', () => {
    const { getByText } = render(<BannerAsPhone />)
    expect(
      getByText('Turning technology into powerful ministry opportunities.')
        .tagName
    ).toEqual('H4')
  })

  it('should show footer as h3', () => {
    const { getByText } = render(<BannerAsPhone />)
    expect(getByText('Until everyone sees Jesus').tagName).toEqual('H3')
  })

  describe('sm down', () => {
    beforeEach(() => {
      matchMediaMock({ width: '959px' })
    })

    it('should show title as h5', () => {
      const { getByText } = render(<BannerAsPhone />)
      expect(
        getByText('Turning technology into powerful ministry opportunities.')
          .tagName
      ).toEqual('H5')
    })

    it('should show footer as h4', () => {
      const { getByText } = render(<BannerAsPhone />)
      expect(getByText('Until everyone sees Jesus').tagName).toEqual('H4')
    })
  })
})
