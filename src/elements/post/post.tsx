import React from 'react'
import { AuthorCard } from '@jesus-film/ark.elements.author-card'
import { Block, BlockProps } from '@jesus-film/ark.elements.block'
import { PostHeader, PostHeaderProps } from './header'
import { Container } from '@material-ui/core'

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

export type PostProps = PostHeaderProps & {
  /**
   * Post author
   */
  author: AuthorNode
  /**
   * Main body of post
   */
  blocks: BlockProps[]
}

export function Post(props: PostProps) {
  return (
    <Container maxWidth="sm">
      <PostHeader {...props} />
      {props.blocks.map((block, i) => (
        <Block {...block} key={`${i}-block`} />
      ))}
      <AuthorCard
        name={props.author.node.name}
        src={props.author.node.avatar.url}
      />
    </Container>
  )
}
