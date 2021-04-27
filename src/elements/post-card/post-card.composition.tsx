import React from 'react'
import { PostCard } from './post-card'

export const HeroPostCard = () => (
  <PostCard
    src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
    title="His Shoes Led to Learning About Christianity"
    category="Following Jesus"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    onClick={() => alert('clicked')}
    variant="hero"
     />
)

export const PremierePostCard = () => (
  <PostCard
    src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    onClick={() => alert('clicked')}
    variant="premiere"
     />
)

export const ItemPostCardNoImage = () => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    category="Following Jesus"
    variant="item"
    author="Jill Hadlock"
  />
)

export const ItemPostCardNoImageNoAuthor = () => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    variant="item"
    />
)

export const ItemPostCard = () => (
  <PostCard
    src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
    title="His Shoes Led to Learning About Christianity"
    variant="item"
    author="Jill Hadlock"
  />
)

export const QuotePostCard = () => (
  <PostCard
    title="His Shoes Led to Learning About Christianity"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    publishedAt="5 minutes ago"
    variant="quote"
  />
)

export const DefaultPostCard = () => (
  <PostCard
    src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
    title="His Shoes Led to Learning About Christianity"
    category="Following Jesus"
    excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
    publishedAt="5 minutes ago"
    onClick={() => alert('clicked')}
    author="Jill Hadlock"
  />
)
