import React from 'react'
import { Post } from '.'
import { postData } from './postData'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const BasicPost = () => (
  <JesusFilmThemeProvider>
    <Post {...postData} />
  </JesusFilmThemeProvider>
)
