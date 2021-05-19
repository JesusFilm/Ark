import React from 'react'
import {
  AuthorCardProps,
  AuthorCard
} from '@jesus-film/ark.elements.author-card'
import { TimeAgo, TimeAgoProps } from '@jesus-film/ark.elements.time-ago'
import { Typography } from '@material-ui/core'

type Category = {
  /** Callback when category is clicked */
  onClick?: () => void
  /** Category name */
  name: string
}

export type PostProps = {
  /**
   * Title of post
   */
  title: string
  /**
   * Post author
   */
  author: AuthorCardProps
  /**
   * List of categories
   */
  categories: Category[]
  /**
   * Main body of post
   */
  body: string
  /**
   * Brief text description
   */
  excerpt: string
} & TimeAgoProps

export function Post({
  title,
  excerpt,
  datetime,
  locale,
  author,
  categories = [],
  body
}: PostProps) {
  return (
    <div>
      <Typography variant="h2" color="textSecondary" align="center">
        {title}
      </Typography>
      <Typography variant="h6" align="center">
        By {author.name}
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        {excerpt}
      </Typography>
      <Typography variant="body2" align="center">
        Published under &nbsp;
        {categories.map((category, i) => (
          <span key={i} onClick={() => category.onClick?.()}>
            {category.name}
            &nbsp;
          </span>
        ))}
        <TimeAgo datetime={datetime} locale={locale} />
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <AuthorCard {...author} />
    </div>
  )
}
