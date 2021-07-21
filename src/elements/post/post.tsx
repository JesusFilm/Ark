import React from 'react'
import { Block, BlockProps } from '@jesus-film/ark.elements.block'
import { PostHeader } from './header'
import { PostFooter } from './footer'
import { Grid } from '@material-ui/core'
import { DefaultPost } from '@jesus-film/ark.elements.post-card'

export type PostProps = {
  post: {
    author: {
      node: {
        slug: string
        avatar: {
          url: string
        }
        name: string
        description: string
      }
    }
    blocks: BlockProps[]
  }
  posts: {
    nodes: DefaultPost[]
  }
}

export function Post({ post, posts }: PostProps) {
  return (
    <>
      <PostHeader {...post} />
      {post.blocks.map((block, i) => (
        <Grid container spacing={5} key={`${i}-block`}>
          <Grid item xs={12}>
            <Block {...block} key={`${i}-block`} />
          </Grid>
        </Grid>
      ))}
      <PostFooter {...post} posts={posts} />
    </>
  )
}
