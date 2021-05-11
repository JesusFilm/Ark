import React from 'react'
import { AuthorCardProps, AuthorCard } from '@jesus-film/ark.elements.author-card'
import { TimeAgo, TimeAgoProps } from '@jesus-film/ark.elements.time-ago'

type Category = {
  uri: string;
  name: string;
};

export type PostProps = {
  /**
   * Title of post
   */
  title: string
  /**
   * Featured image of post
   */
  coverImage?: string
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
} & TimeAgoProps;

export function Post ({ title, coverImage, datetime, locale, author, categories = [], body }: PostProps) {
  return (
    <div>
      {title}
      {
        categories.map(category => (
          category.name
        ))
      }
      <div>
        {coverImage && coverImage}
      </div>
      <div>
        <TimeAgo datetime={datetime} locale={locale} />
      </div>
      <div>
        <AuthorCard {...author} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: body }}>
      </div>
    </div>
  )
}
