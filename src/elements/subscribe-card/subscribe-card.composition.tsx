import React from 'react'
import { JesusFilmThemeProvider } from '../../providers/jesus-film-theme-provider'
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
