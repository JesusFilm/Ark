import React from 'react'
import { render } from '@testing-library/react'
import { PostFooter } from '.'

describe('post-footer', () => {
  it('should render Author', () => {
    const { getByTestId } = render(
      <PostFooter
        author={{
          node: {
            slug: 'user',
            avatar: {
              url: 'http://2.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g'
            },
            name: 'Josh McDowell',
            description:
              "On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades. Josh McDowell shares the essentials of the Christian faith in everyday language so youth, families, churches, leaders and individuals of all ages are prepared for the life of faith. Since 1961, Josh has delivered talks in 126 countries. He has written or co-authored 151 books, including More Than a Carpenter and Evidence That Demands a Verdict, one of the twentieth century's top 40 books. Josh and his wife, Dottie have been married 48 years, have four wonderful children and 10 beloved grandchildren."
          }
        }}
        AuthorLink={(props) => (
          <a {...props} href="/josh-mcdowell" data-testid="author-link" />
        )}
        posts={{
          nodes: [
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/random/1920x1080'
                }
              },
              title: 'His Shoes Led to Learning About Christianity',
              slug: 'his-shoes-led-to-learning-about-christianity',
              excerpt:
                "The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
            },
            {
              featuredImage: {
                node: {
                  sourceUrl:
                    'https://source.unsplash.com/1920x1080/daily?direction'
                }
              },
              slug: '4-tips-for-when-you-feel-directionless',
              title: '4 Tips for When You Feel Directionless',
              excerpt:
                "Wouldn't it be great if God sent us a daily email that outlined all the things He wanted us to accomplish? We could simply go through our day checking off His to-do list. And we'd never have to worry about whether we're in the center of His will."
            }
          ]
        }}
      />
    )
    const link = getByTestId('author-link')
    expect(link).toBeInTheDocument()
    expect(link.textContent).toEqual('Josh McDowell')
    expect(link.getAttribute('href')).toEqual('/josh-mcdowell')
  })

  it('should render post-list title', () => {
    const { getByText } = render(
      <PostFooter
        author={{
          node: {
            slug: 'user',
            avatar: {
              url: 'http://2.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g'
            },
            name: 'Josh McDowell',
            description:
              "On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades. Josh McDowell shares the essentials of the Christian faith in everyday language so youth, families, churches, leaders and individuals of all ages are prepared for the life of faith. Since 1961, Josh has delivered talks in 126 countries. He has written or co-authored 151 books, including More Than a Carpenter and Evidence That Demands a Verdict, one of the twentieth century's top 40 books. Josh and his wife, Dottie have been married 48 years, have four wonderful children and 10 beloved grandchildren."
          }
        }}
        posts={{
          nodes: [
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/random/1920x1080'
                }
              },
              title: 'His Shoes Led to Learning About Christianity',
              slug: 'his-shoes-led-to-learning-about-christianity',
              excerpt:
                "The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
            },
            {
              featuredImage: {
                node: {
                  sourceUrl:
                    'https://source.unsplash.com/1920x1080/daily?direction'
                }
              },
              slug: '4-tips-for-when-you-feel-directionless',
              title: '4 Tips for When You Feel Directionless',
              excerpt:
                "Wouldn't it be great if God sent us a daily email that outlined all the things He wanted us to accomplish? We could simply go through our day checking off His to-do list. And we'd never have to worry about whether we're in the center of His will."
            }
          ]
        }}
      />
    )
    expect(
      getByText('His Shoes Led to Learning About Christianity')
    ).toBeInTheDocument()
  })
})
