import React from 'react'
import { PostCard } from './post-card'
import {
  HeroProps,
  PremiereProps,
  ItemProps,
  QuoteProps,
  DefaultProps
} from './variants'

export const HeroPostCard = (props: Partial<HeroProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    category="Following Jesus"
    onClick={() => alert('clicked')}
    variant="hero"
    buttonText="Read Everything"
    {...props}
  />
)

export const HeroPostCardNoImage = (props: Partial<HeroProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    variant="hero"
    {...props}
  />
)

export const PremierePostCard = (props: Partial<PremiereProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    variant="premiere"
    {...props}
  />
)

export const ItemPostCardNoImage = (props: Partial<ItemProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    variant="item"
    author="Jill Hadlock"
    {...props}
  />
)

export const ItemPostCardNoImageNoAuthor = (props: Partial<ItemProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    variant="item"
    {...props}
  />
)

export const ItemPostCard = (props: Partial<ItemProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
    title="His Shoes Led to Learning About Christianity"
    variant="item"
    author="Jill Hadlock"
    {...props}
  />
)

export const QuotePostCard = (props: Partial<QuoteProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    variant="quote"
    {...props}
  />
)

export const DefaultPostCard = (props: Partial<DefaultProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
    title="His Shoes Led to Learning About Christianity"
    category="Following Jesus"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    variant="default"
    {...props}
  />
)
