import React from 'react'
import { PostFooter } from './footer'

export const BasicPostFooter = () => (
  <PostFooter
    author={{
      node: {
        avatar: {
          url: 'http://2.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g'
        },
        name: 'Josh McDowell',
        description:
          "On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades. Josh McDowell shares the essentials of the Christian faith in everyday language so youth, families, churches, leaders and individuals of all ages are prepared for the life of faith. Since 1961, Josh has delivered talks in 126 countries. He has written or co-authored 151 books, including More Than a Carpenter and Evidence That Demands a Verdict, one of the twentieth century's top 40 books. Josh and his wife, Dottie have been married 48 years, have four wonderful children and 10 beloved grandchildren."
      }
    }}
  />
)
