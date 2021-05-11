import React from 'react'
import { Post } from './post'
import { postBody } from './postBody'

export const BasicPost = () => (
  <Post
    title="His Shoes Led to Learning About Christianity"
    coverImage="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
    datetime={new Date('2021-05-01T11:30:00.000-05:00')}
    author={{
      name: 'Tez Brooks',
      description:
        'Award winning author, screenwriter and international speaker',
      src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg',
      onClick: () => alert('Clicked Tez')
    }}
    categories={[{
      name: 'Following Jesus',
      uri: 'https://google.com/following'
    }]}
    body={postBody}
  />
)
