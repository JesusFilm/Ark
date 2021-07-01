import React from 'react'
import { AuthorCard } from '@jesus-film/ark.elements.author-card'
import { Block, BlockProps } from '@jesus-film/ark.elements.block'
import { Container } from '@material-ui/core'
import { PostHeader, PostHeaderProps } from './header'

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
  /**
   * Props from the header component
   */
  PostHeaderProps: PostHeaderProps
}

export function Post({ author, blocks, PostHeaderProps }: PostProps) {
  return (
    <Container maxWidth="sm">
      <PostHeader {...PostHeaderProps} data-testid="postId" />
      {blocks.map((block, i) => (
        <Block {...block} key={`${i}-block`} />
      ))}
      <AuthorCard name={author.node.name} src={author.node.avatar.url} />
    </Container>
  )
}
