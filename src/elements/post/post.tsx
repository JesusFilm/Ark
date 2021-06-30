import React from 'react'
import { AuthorCard } from '@jesus-film/ark.elements.author-card'
import { Block, BlockProps } from '@jesus-film/ark.elements.block'
import { Container } from '@material-ui/core'
import { BasicPostHeader } from './header/header.composition'

// type Category = {
//   /** Callback when category is clicked */
//   categoryId: string
//   /** Category name */
//   name: string
// }

// type Categories = {
//   /** Category name */
//   nodes: Category[]
// }

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
  // TODO: add in the videos and images
  /**
   * Post author
   */
  author: AuthorNode
  /**
   * Main body of post
   */
  blocks: BlockProps[]
}

export function Post({ author, blocks }: PostProps) {
  return (
    <Container maxWidth="sm">
      <BasicPostHeader />
      {blocks.map((block, i) => (
        <Block {...block} key={`${i}-block`} />
      ))}
      <AuthorCard name={author.node.name} src={author.node.avatar.url} />
    </Container>
  )
}
