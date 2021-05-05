import React from 'react'
import { Banner, BannerProps } from './banner'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const bannerPhone = (props: Partial<BannerProps>) => (
  <JesusFilmThemeProvider>
    <Banner
      title="Turnining technology into powerful ministry opportunities."
      description="Reach the unreached on iOS and Android. With our free apps, watch, download and share our films in more than 1,800 languages."
      backgroundSrc="https://images.unsplash.com/photo-1510333337682-fdd0eba357a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
      footer="Until everyone sees Jesus"
      variant='phone'
    />
  </JesusFilmThemeProvider>
)

export const bannerDefault = (proprs: Partial<BannerProps>) => (
  <JesusFilmThemeProvider>
    <Banner
      title="Turnining technology into powerful ministry opportunities."
      description="Reach the unreached on iOS and Android. With our free apps, watch, download and share our films in more than 1,800 languages."
      backgroundSrc="https://images.unsplash.com/photo-1510333337682-fdd0eba357a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
      footer="Until everyone sees Jesus"
      variant='default'
    />
  </JesusFilmThemeProvider>
)
