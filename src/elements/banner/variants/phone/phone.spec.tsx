import React from 'react'
import { render } from '@testing-library/react'
import { Phone } from './phone'
import JesusBreakingBread from '../../assets/jesus-breaking-bread.jpg'
import FollowingJesus from '../../assets/following-jesus.jpg'

describe('phone', () => {
  it('should show googleButton and appleButton', () => {
    const { getByRole } = render(
      <Phone
        title="Turning technology into powerful ministry opportunities."
        description="Reach the unreached on iOS and Android. With our free apps, watch, download and share our films in more than 1,800 languages."
        backgroundSrc={JesusBreakingBread}
        frameImgSrc={FollowingJesus}
        footer="Until everyone sees Jesus"
        variant="phone"
        androidAppStoreHref="https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Apr0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-nz-1003227-med-hasem-py-Evergreen-Apr0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700059009850477_creativeid_482146217753_device_c&gclid=Cj0KCQjwp86EBhD7ARIsAFkgakijo0qUHKfGIq2HYAEdo55PrWzwqXvSQR-058ElY3YKD18nrL21Er8aAgy4EALw_wcB&gclsrc=aw.ds"
        iosAppStoreHref="https://www.apple.com/nz/app-store/"
      />
    )
    expect(getByRole('img', { name: 'google button' })).toBeTruthy()
    expect(getByRole('img', { name: 'apple button' })).toBeTruthy()
  })
  it('should not show googleButton and appleButton', () => {
    const { queryByRole } = render(
      <Phone
        title="Turning technology into powerful ministry opportunities."
        description="Reach the unreached on iOS and Android. With our free apps, watch, download and share our films in more than 1,800 languages."
        backgroundSrc={JesusBreakingBread}
        frameImgSrc={FollowingJesus}
        footer="Until everyone sees Jesus"
        variant="phone"
      />
    )
    expect(queryByRole('img', { name: 'google button' })).not.toBeTruthy()
    expect(queryByRole('img', { name: 'apple button' })).not.toBeTruthy()
  })
})