import React from 'react'
import { render } from '@testing-library/react'
import { BannerWithPhone, BasicBanner } from './banner.composition'
import FollowingJesus from './assets/following-jesus.jpg'
import JesusBreakingBread from './assets/jesus-breaking-bread.jpg'

describe('banner', () => {
  it('should show googleButton and/or appleButton depending on props', () => {
    const { rerender, queryByRole } = render(<BannerWithPhone />)
    expect(queryByRole('img', { name: 'google button' })).toBeTruthy()
    expect(queryByRole('img', { name: 'apple button' })).toBeTruthy()
    rerender(<BannerWithPhone appleAppStoreHref={undefined} />)
    expect(queryByRole('img', { name: 'apple button' })).not.toBeTruthy()
    expect(queryByRole('img', { name: 'google button' })).toBeTruthy()
    rerender(<BannerWithPhone googleAppStoreHref={undefined} />)
    expect(queryByRole('img', { name: 'apple button' })).toBeTruthy()
    expect(queryByRole('img', { name: 'google button' })).not.toBeTruthy()
    rerender(
      <BannerWithPhone
        appleAppStoreHref={undefined}
        googleAppStoreHref={undefined}
      />
    )
    expect(queryByRole('img', { name: 'apple button' })).not.toBeTruthy()
    expect(queryByRole('img', { name: 'google button' })).not.toBeTruthy()
  })

  it('should show phoneWithCustomImage depending on props', () => {
    const { rerender, queryByTestId } = render(<BannerWithPhone />)
    expect(
      queryByTestId('bannerPhoneWithCustomImage').style.backgroundImage
    ).toEqual(`url(${FollowingJesus})`)
    rerender(<BannerWithPhone phoneImgSrc={undefined} />)
    expect(queryByTestId('bannerPhoneWithCustomImage')).not.toBeTruthy()
  })

  it('should render background', () => {
    const { queryByTestId } = render(<BasicBanner />)
    expect(queryByTestId('bannerContainer').style.backgroundImage).toEqual(
      `url(${JesusBreakingBread})`
    )
  })

  it('should render title', () => {
    const { rerender, queryByRole } = render(<BasicBanner />)
    expect(
      queryByRole('heading', {
        name: 'Turning technology into powerful ministry opportunities.'
      }).tagName
    ).toEqual('H3')
    rerender(<BasicBanner title={<h1>my custom title</h1>} />)
    expect(
      queryByRole('heading', {
        name: 'my custom title'
      }).tagName
    ).toEqual('H1')
  })

  it('should render description', () => {
    const { rerender, queryByRole } = render(<BasicBanner />)
    expect(
      queryByRole('heading', {
        name: 'Reach the unreached on iOS and Android. With our free apps, watch, download and share our films in more than 1,800 languages.'
      }).tagName
    ).toEqual('H6')
    rerender(<BasicBanner description={<h1>my custom description</h1>} />)
    expect(
      queryByRole('heading', {
        name: 'my custom description'
      }).tagName
    ).toEqual('H1')
  })

  it('should render footer', () => {
    const { rerender, queryByRole } = render(<BasicBanner />)
    expect(
      queryByRole('heading', {
        name: 'Until everyone sees Jesus'
      }).tagName
    ).toEqual('H2')
    rerender(<BasicBanner footer={<h1>my custom footer</h1>} />)
    expect(
      queryByRole('heading', {
        name: 'my custom footer'
      }).tagName
    ).toEqual('H1')
  })

  it('should render children', () => {
    const { queryByTestId } = render(
      <BasicBanner>
        <div data-testid="abc" />
      </BasicBanner>
    )
    expect(queryByTestId('abc')).toBeTruthy()
  })
})
