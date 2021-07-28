import React from 'react'
import { ListHeader } from './list-header'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const BasicListHeader = () => (
  <JesusFilmThemeProvider>
    <ListHeader title="Authors" />
  </JesusFilmThemeProvider>
)

export const ListHeaderWithSeeAll = () => (
  <JesusFilmThemeProvider>
    <ListHeader
      title="Authors"
      onSeeAllClick={() => alert('This is a test click')}
    />
  </JesusFilmThemeProvider>
)
