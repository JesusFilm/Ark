import React from 'react'
import { Post } from '.'
import { postData } from './postData'

export const BasicPost = () => <Post {...postData} PostHeaderProps={postData} />
