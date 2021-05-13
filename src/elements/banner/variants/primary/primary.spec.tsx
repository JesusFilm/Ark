import React from 'react'
import { render } from '@testing-library/react'
import matchMediaMock from '../../../../../jest/util/match-media-mock'
import { BannerAsPrimary } from '../../banner.composition'

describe('primary', () => {
  it('should show title as h4', () => {
    const { getByText } = render(<BannerAsPrimary />)
    expect(
      getByText('Turning technology into powerful ministry opportunities.')
        .tagName
    ).toEqual('H4')
  })

  it('should show footer as h3', () => {
    const { getByText } = render(<BannerAsPrimary />)
    expect(getByText('Until everyone sees Jesus').tagName).toEqual('H3')
  })

  describe('sm down', () => {
    beforeEach(() => {
      matchMediaMock({ width: '959px' })
    })

    it('should show title as h5', () => {
      const { getByText } = render(<BannerAsPrimary />)
      expect(
        getByText('Turning technology into powerful ministry opportunities.')
          .tagName
      ).toEqual('H5')
    })

    it('should show footer as h4', () => {
      const { getByText } = render(<BannerAsPrimary />)
      expect(getByText('Until everyone sees Jesus').tagName).toEqual('H4')
    })
  })
})
