import React from 'react'
import { AuthorCard } from '@jesus-film/ark.elements.author-card'
import { Block, BlockProps } from '@jesus-film/ark.elements.block'
import { PostHeader, PostHeaderProps } from './header'
import { Grid } from '@material-ui/core'

type Avatar = {
  url: string
}

type Author = {
  /** Avatar */
  avatar: Avatar
  /** Author name */
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
    <>
      <PostHeader {...props} />
      {props.blocks.map((block, i) => (
        <Grid container spacing={5} key={`${i}-block`}>
          <Grid item xs={12}>
            <Block {...block} key={`${i}-block`} />
          </Grid>
        </Grid>
      ))}
      <AuthorCard
        name={props.author.node.name}
        src={props.author.node.avatar.url}
      />
    </>
  )
}
