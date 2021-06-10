import React from 'react'
import { AuthorCard } from '@jesus-film/ark.elements.author-card'
import { TimeAgo, TimeAgoProps } from '@jesus-film/ark.elements.time-ago'
import { Block, BlockProps } from '@jesus-film/ark.elements.block'
import { Typography, Container } from '@material-ui/core'

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
  blocks: BlockProps[]
  /**
   * Date
   */
  date: string
} & TimeAgoProps

export function Post({
  title,
  date,
  locale,
  author,
  categories,
  blocks
}: PostProps) {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" color="textSecondary" align="center">
        {title}
      </Typography>
      <Typography variant="h6" align="center">
        By {author.node.name}
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
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
        <Block {...block} key={`${i}-block`} />
      ))}
      <AuthorCard name={author.node.name} src={author.node.avatar.url} />
    </Container>
  )
}
