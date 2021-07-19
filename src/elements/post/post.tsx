import React from 'react'
import { Block, BlockProps } from '@jesus-film/ark.elements.block'
import { PostHeader, PostHeaderProps } from './header'
import { PostFooter, PostFooterProps } from './footer'
import { Grid } from '@material-ui/core'

export type PostProps = PostHeaderProps &
  PostFooterProps & {
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
      <PostFooter {...props} />
    </>
  )
}
