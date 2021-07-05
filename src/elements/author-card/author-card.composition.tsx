import React from 'react'
import { AuthorCard, AuthorCardProps } from '.'

export const BasicAuthorCard = (props: Partial<AuthorCardProps>) => (
  <AuthorCard
    name="Tez Brooks"
    description="Award winning author, screenwriter and international speaker"
    {...props}
  />
)

export const CompleteAuthorCard = (props: Partial<AuthorCardProps>) => (
  <AuthorCard
    name="Tez Brooks"
    description="Award winning author, screenwriter and international speaker"
    src="https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg"
    onClick={() => alert('yoyoyo')}
    {...props}
  />
)
