import React from 'react'
import { Post } from './post'
import { postBody } from './postBody'

export const BasicPost = () => (
  <Post
    title="His Shoes Led to Learning About Christianity"
    datetime={new Date('2021-05-01T11:30:00.000-05:00')}
    author={{
      name: 'Tez Brooks',
      description:
        'Award winning author, screenwriter and international speaker',
      src: 'https://www.jesusfilm.org/content/dam/jesusfilm/avatars/tezg.jpg',
      onClick: () => alert('Clicked Tez')
    }}
    categories={[
      {
        name: 'Following Jesus',
        uri: 'https://google.com/following'
      }
    ]}
    body={postBody}
    excerpt="I threw the Bible down next to me, just like I’ve done numerous times in my life. The Afghan man gently picked up the book, kissed it, and delicately set it back down.
From that profound moment, reverence took on a whole new meaning."
  />
)
