import React from 'react'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'
import { PostHeader } from './post-header'

export const BasicPostHeader = () => (
  <JesusFilmThemeProvider>
    <I18nProvider>
      <PostHeader
        title="Testing the Historical Reliability of the Old Testament"
        excerpt="If the Old testament is God-breathed words, if God has supernaturally superintended its transmission down through the ages, then the Old Testament should have no problem standing up to the tests that historians use to determine the reliability of ancient documents."
        date="2021-06-15T22:00:35.664Z"
        category={{ name: 'Following Jesus' }}
        author={{ name: 'Josh McDowell' }}
      />
    </I18nProvider>
  </JesusFilmThemeProvider>
)
