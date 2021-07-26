import React from 'react'
import { AuthorCard } from '@jesus-film/ark.elements.author-card'
import { Block, BlockProps } from '@jesus-film/ark.elements.block'
import { PostHeader, PostHeaderProps } from './header'
import { Grid } from '@material-ui/core'

type AuthorAvatar = {
  url: string
}

type Author = {
  /** Author name */
  name: string
  /** Author Slug */
  slug: string
  /** Avatar */
  avatar?: AuthorAvatar
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
        slug={props.author.node.slug}
        avatar={props.author.node.avatar}
      />
    </>
  )
}
