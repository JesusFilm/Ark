import React from 'react'
import { PostCard, PostCardProps } from './post-card'

export const HeroPostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    category="Following Jesus"
    onClick={(props.variant === 'hero' && props.onClick) || (() => alert('clicked'))}
    variant="hero"
    buttonText="Read Everything"
  />
)

export const HeroPostCardNoImage = (props: Partial<PostCardProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    variant="hero"
  />
)

export const PremierePostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    variant="premiere"
  />
)

export const ItemPostCardNoImage = (props: Partial<PostCardProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    variant="item"
    author="Jill Hadlock"
  />
)

export const ItemPostCardNoImageNoAuthor = (props: Partial<PostCardProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    variant="item"
    />
)

export const ItemPostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
    title="His Shoes Led to Learning About Christianity"
    variant="item"
    author="Jill Hadlock"
  />
)

export const QuotePostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    datetime={new Date('2021-05-01T11:30:00.000-05:00')}
    variant="quote"
  />
)

export const DefaultPostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
    title="His Shoes Led to Learning About Christianity"
    category="Following Jesus"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    datetime={new Date('2021-04-30T11:30:00.000+02:00')}
    locale='ar'
    variant="default"
  />
)
