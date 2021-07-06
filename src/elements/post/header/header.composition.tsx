import React from 'react'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'
import { PostHeader } from './header'

export const BasicPostHeader = () => (
  <JesusFilmThemeProvider>
    <I18nProvider>
      <PostHeader
        title="Testing the Historical Reliability of the Old Testament"
        excerpt="If the Old testament is God-breathed words, if God has supernaturally superintended its transmission down through the ages, then the Old Testament should have no problem standing up to the tests that historians use to determine the reliability of ancient documents."
        date="2021-06-15T22:00:35.664Z"
        categories={{
          nodes: [
            {
              name: 'Following Jesus'
            }
          ]
        }}
        author={{
          node: {
            name: 'Josh McDowell'
          }
        }}
      />
    </I18nProvider>
  </JesusFilmThemeProvider>
)

export const FeaturedImagePostHeader = () => (
  <JesusFilmThemeProvider>
    <I18nProvider>
      <PostHeader
        featuredImage={{
          node: { sourceUrl: 'https://source.unsplash.com/random/1920x1080' }
        }}
        title="Testing the Historical Reliability of the Old Testament"
        excerpt="If the Old testament is God-breathed words, if God has supernaturally superintended its transmission down through the ages, then the Old Testament should have no problem standing up to the tests that historians use to determine the reliability of ancient documents."
        date="2021-06-15T22:00:35.664Z"
        categories={{
          nodes: [
            {
              name: 'Following Jesus'
            }
          ]
        }}
        author={{
          node: {
            name: 'Josh McDowell'
          }
        }}
      />
    </I18nProvider>
  </JesusFilmThemeProvider>
)
