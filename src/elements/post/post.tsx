import React from 'react'
import {
  AuthorCardProps,
  AuthorCard
} from '@jesus-film/ark.elements.author-card'
import { TimeAgo, TimeAgoProps } from '@jesus-film/ark.elements.time-ago'
import { Typography } from '@material-ui/core'

type Category = {
  /** Callback when category is clicked */
  categoryId: string
  /** Category name */
  name: string
}

type Categories = {
  /** Category name */
  nodes: Category[]
}

type Avatar = {
  url: string
}

type Author = {
  /** Avatar */
  avatar: Avatar
  /** Category name */
  name: string
}

type AuthorNode = {
  /** Avatar */
  node: Author
}

type ParagraphAttributes = {
  content: string
}

type Block = {
  name?: string
  attributes?: ParagraphAttributes
}

export type PostProps = {
  /**
   * Title of post
   */
  title: string
  /**
   * Post author
   */
  author: AuthorNode
  /**
   * NodeList of categories
   */
  categories: Categories
  /**
   * Main body of post
   */
  blocks: Block[]
  /**
   * Brief text description
   */
  excerpt: string
  date: string
} & TimeAgoProps

export function Post({
  title,
  excerpt,
  date,
  locale,
  author,
  categories,
  blocks
}: PostProps) {
  return (
    <div>
      <Typography variant="h2" color="textSecondary" align="center">
        {title}
      </Typography>
      <Typography variant="h6" align="center">
        By {author.node.name}
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Typography>
      <Typography variant="body2" align="center">
        Published under &nbsp;
        {categories.nodes.map((category) => (
          <span key={category.categoryId}>
            {category.name}
            &nbsp;
          </span>
        ))}
        <TimeAgo datetime={new Date(date)} locale={locale} />
      </Typography>
      {blocks.map((block, i) => (
        <span
          key={`${i}-block`}
          dangerouslySetInnerHTML={
            block.name &&
            block.name === 'core/paragraph' &&
            block.attributes.content
              ? { __html: block.attributes.content }
              : { __html: '<br />' }
          }
        />
      ))}
      <AuthorCard name={author.node.name} src={author.node.avatar.url} />
    </div>
  )
}
