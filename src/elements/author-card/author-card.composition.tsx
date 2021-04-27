import React from 'react'
import { AuthorCard } from './author-card'

export const MinimalAuthorCard = () => (
  <AuthorCard
    name="Tez Brooks"
    description="Award winning author, screenwriter and international speaker"
  />
)

export const FrillsAuthorCard = () => (
  <AuthorCard
    name="Tez Brooks"
    description="Award winning author, screenwriter and international speaker"
    src="https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg"
    onClick={() => alert('yoyoyo')}
  />
)
