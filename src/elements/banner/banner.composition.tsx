import React from 'react'
import { Banner, BannerProps } from './banner'
import JesusBreakingBread from './assets/jesus-breaking-bread.jpg'
import FollowingJesus from './assets/following-jesus.jpg'

export const BasicBanner = (props: Partial<BannerProps>) => (
  <Banner
    title="Turning technology into powerful ministry opportunities."
    description="Reach the unreached on iOS and Android. With our free apps, watch, download and share our films in more than 1,800 languages."
    backgroundSrc={JesusBreakingBread}
    footer="Until everyone sees Jesus"
    py={46}
    {...props}
  />
)
export const BannerWithPhone = (props: Partial<BannerProps>) => (
  <Banner
    title="Turning technology into powerful ministry opportunities."
    description="Reach the unreached on iOS and Android. With our free apps, watch, download and share our films in more than 1,800 languages."
    backgroundSrc={JesusBreakingBread}
    phoneImgSrc={FollowingJesus}
    footer="Until everyone sees Jesus"
    googleAppStoreHref="https://play.google.com/"
    appleAppStoreHref="https://www.apple.com/nz/app-store/"
    py={10}
    {...props}
  />
)
