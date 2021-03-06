import React from 'react'
import { AuthorCard, AuthorCardProps } from '.'

export const BasicAuthorCard = (props: Partial<AuthorCardProps>) => (
  <AuthorCard
    name="Tez Brooks"
    slug="tez-brooks"
    avatar={{
      url: ''
    }}
    description="Award winning author, screenwriter and international speaker"
    {...props}
  />
)

export const CompleteAuthorCard = (props: Partial<AuthorCardProps>) => (
  <AuthorCard
    name="Tez Brooks"
    slug="tez-brooks"
    avatar={{
      url: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg'
    }}
    description="Award winning author, screenwriter and international speaker"
    {...props}
  />
)
