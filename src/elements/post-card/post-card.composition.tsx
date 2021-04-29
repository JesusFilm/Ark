import React from 'react'
import { PostCard, PostCardProps } from './post-card'

export const HeroPostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    category="Following Jesus"
    onClick={() => alert('clicked')}
    style="hero"
  />
)

export const PremierePostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    style="premiere"
  />
)

export const ItemPostCardNoImage = (props: Partial<PostCardProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    style="item"
    author="Jill Hadlock"
  />
)

export const ItemPostCardNoImageNoAuthor = (props: Partial<PostCardProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    style="item"
    />
)

export const ItemPostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
    title="His Shoes Led to Learning About Christianity"
    style="item"
    author="Jill Hadlock"
  />
)

export const QuotePostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    publishedAt="5 minutes ago"
    style="quote"
  />
)

export const DefaultPostCard = (props: Partial<PostCardProps>) => (
  <PostCard
    src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
    title="His Shoes Led to Learning About Christianity"
    category="Following Jesus"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    publishedAt="5 minutes ago"
    style="default"
  />
)
