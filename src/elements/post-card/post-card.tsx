import React from 'react'
import {
  Hero,
  HeroProps,
  Premiere,
  PremiereProps,
  Item,
  ItemProps,
  Quote,
  QuoteProps,
  Default,
  DefaultProps
} from './variants'

export type PostCardProps = HeroProps | PremiereProps | ItemProps | QuoteProps | DefaultProps

export function PostCard (PostCardProps: PostCardProps) {
  switch (PostCardProps.variant) {
    case 'hero':
      return <Hero {...PostCardProps} />
    case 'premiere':
      return <Premiere {...PostCardProps} />
    case 'item':
      return <Item {...PostCardProps} />
    case 'quote':
      return <Quote {...PostCardProps} />
    case 'default':
      return <Default {...PostCardProps} />
  }
}
