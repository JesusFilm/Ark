import React from 'react'
import { Post } from '.'
import { postData } from './postData'

export const BasicPost = () => (
  <Post
    {...postData}
    author={{
      node: {
        name: 'Jesus Film App',
        slug: 'user',
        avatar: {
          url: 'http://2.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g'
        }
      }
    }}
  />
)
