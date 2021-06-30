import React from 'react'
import { AuthorCard } from '@jesus-film/ark.elements.author-card'
import { Block, BlockProps } from '@jesus-film/ark.elements.block'
import { Container } from '@material-ui/core'
// import Header from './header/header'

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
}

export function Post({
  title,
  date,
  // locale,
  author,
  categories,
  blocks
}: PostProps) {
  return (
    <Container maxWidth="sm">
      {blocks.map((block, i) => (
        <Block {...block} key={`${i}-block`} />
      ))}
      <AuthorCard name={author.node.name} src={author.node.avatar.url} />
    </Container>
  )
}
