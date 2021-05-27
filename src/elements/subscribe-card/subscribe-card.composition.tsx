import React from 'react'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'
import { SubscribeCard } from './subscribe-card'

export const BasicSubscribeCard = () => (
  <JesusFilmThemeProvider>
    <SubscribeCard
      onSubmit={({ email }) => {
        alert(`emailAddress: ${email}`)
      }}
    />
  </JesusFilmThemeProvider>
)
