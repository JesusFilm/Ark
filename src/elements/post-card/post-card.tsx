import React from 'react'
import { Hero, Premiere, Item, Quote, Default } from './variants'

type variant = 'hero' | 'premiere' | 'item' | 'card' | 'quote'

export type PostCardProps = {
  /** post title */
  title: string;
  /** post category */
  category?: string;
  /** post excerpt */
  excerpt?: string;
  /** post publishedAt string */
  publishedAt?: string;
  /** Image source url */
  src?: string;
  /** Author name */
  author?: string;
  /** Callback when button is clicked */
  onClick?: () => void;
  /** Style */
  variant?: variant
};

export function PostCard ({
  title,
  category,
  excerpt,
  publishedAt,
  src,
  author,
  onClick,
  variant
}: PostCardProps) {
  const withDefault = variant || 'default'
  return (
    <React.Fragment>
      {
        {
          hero: (<Hero
                    title={title}
                    category={category}
                    excerpt={excerpt}
                    src={src}
                    onClick={onClick} />),
          premiere: (<Premiere
                    title={title}
                    excerpt={excerpt}
                    src={src} />),
          item: (<Item
                    title={title}
                    author={author}
                    src={src} />),
          quote: (<Quote
                    title={title}
                    publishedAt={publishedAt}
                    excerpt={excerpt} />),
          default: (<Default
                    title={title}
                    category={category}
                    publishedAt={publishedAt}
                    src={src}
                    excerpt={excerpt} />)
        }[withDefault]
    }
    </React.Fragment>

  )
}
