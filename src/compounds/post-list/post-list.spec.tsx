import React from 'react'
import { render } from '@testing-library/react'
import { PostList } from '.'

describe('PostList', () => {
  it('should render a single post', () => {
    const { getByTestId } = render(
      <PostList
        PostLink={({ children, href, className }) => (
          <a
            data-testid={`link-${href}`}
            className={className}
            href={`/posts/${href}`}>
            {children}
          </a>
        )}
        posts={{
          nodes: [
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/1920x1080/daily?doubt'
                }
              },
              slug: '10-bible-verses-about-faith-and-doubt',
              title: '10 Bible Verses about Faith and Doubt',
              excerpt:
                'Issues of faith and doubt have a massive impact on Christians of every maturity level.'
            }
          ]
        }}
        variant="premiere"
      />
    )
    const link = getByTestId('link-10-bible-verses-about-faith-and-doubt')
    expect(link).toHaveAttribute(
      'href',
      '/posts/10-bible-verses-about-faith-and-doubt'
    )
    expect(link.parentElement).toHaveClass(
      'MuiGrid-grid-sm-12 MuiGrid-grid-md-6'
    )
  })

  it('should render two posts', () => {
    const { getByTestId } = render(
      <PostList
        PostLink={({ children, href, className }) => (
          <a
            data-testid={`link-${href}`}
            className={className}
            href={`/posts/${href}`}>
            {children}
          </a>
        )}
        posts={{
          nodes: [
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/1920x1080/daily?doubt'
                }
              },
              slug: '10-bible-verses-about-faith-and-doubt',
              title: '10 Bible Verses about Faith and Doubt',
              excerpt:
                'Issues of faith and doubt have a massive impact on Christians of every maturity level.'
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
                "Wouldn't it be great if God sent us a daily email that outlined all the things He wanted us to accomplish?"
            }
          ]
        }}
        variant="premiere"
      />
    )
    const link1 = getByTestId('link-10-bible-verses-about-faith-and-doubt')
    expect(link1).toHaveAttribute(
      'href',
      '/posts/10-bible-verses-about-faith-and-doubt'
    )
    expect(link1.parentElement).toHaveClass(
      'MuiGrid-grid-sm-6 MuiGrid-grid-md-6'
    )
    const link2 = getByTestId('link-4-tips-for-when-you-feel-directionless')
    expect(link2).toHaveAttribute(
      'href',
      '/posts/4-tips-for-when-you-feel-directionless'
    )
  })

  it('should render three posts', () => {
    const { getByTestId } = render(
      <PostList
        PostLink={({ children, href, className }) => (
          <a
            data-testid={`link-${href}`}
            className={className}
            href={`/posts/${href}`}>
            {children}
          </a>
        )}
        posts={{
          nodes: [
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/1920x1080/daily?doubt'
                }
              },
              slug: '10-bible-verses-about-faith-and-doubt',
              title: '10 Bible Verses about Faith and Doubt',
              excerpt:
                'Issues of faith and doubt have a massive impact on Christians of every maturity level.'
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
                "Wouldn't it be great if God sent us a daily email that outlined all the things He wanted us to accomplish?"
            },
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/1920x1080/daily?alone'
                }
              },
              slug: 'what-to-do-when-you-feel-alone',
              title: 'What To Do When You Feel Alone',
              excerpt: 'At one time or another, we all feel alone.'
            }
          ]
        }}
        variant="premiere"
      />
    )
    const link1 = getByTestId('link-10-bible-verses-about-faith-and-doubt')
    expect(link1).toHaveAttribute(
      'href',
      '/posts/10-bible-verses-about-faith-and-doubt'
    )
    expect(link1.parentElement).toHaveClass(
      'MuiGrid-grid-sm-12 MuiGrid-grid-md-3'
    )
    expect(
      getByTestId('link-4-tips-for-when-you-feel-directionless')
    ).toHaveAttribute('href', '/posts/4-tips-for-when-you-feel-directionless')
    expect(getByTestId('link-what-to-do-when-you-feel-alone')).toHaveAttribute(
      'href',
      '/posts/what-to-do-when-you-feel-alone'
    )
  })

  it('should render without error', () => {
    const { rerender, getByRole } = render(
      <PostList
        posts={{
          nodes: [
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/1920x1080/daily?doubt'
                }
              },
              slug: '10-bible-verses-about-faith-and-doubt',
              title: '10 Bible Verses about Faith and Doubt',
              excerpt:
                'Issues of faith and doubt have a massive impact on Christians of every maturity level.'
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
                "Wouldn't it be great if God sent us a daily email that outlined all the things He wanted us to accomplish?"
            },
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/1920x1080/daily?alone'
                }
              },
              slug: 'what-to-do-when-you-feel-alone',
              title: 'What To Do When You Feel Alone',
              excerpt: 'At one time or another, we all feel alone.'
            }
          ]
        }}
        variant="premiere"
      />
    )
    expect(
      getByRole('link', {
        name: '10 Bible Verses about Faith and Doubt Issues of faith and doubt have a massive impact on Christians of every maturity level.'
      })
    ).toBeInTheDocument()
    rerender(
      <PostList
        posts={{
          nodes: [
            {
              featuredImage: {
                node: null
              },
              slug: '10-bible-verses-about-faith-and-doubt',
              title: '10 Bible Verses about Faith and Doubt',
              excerpt:
                'Issues of faith and doubt have a massive impact on Christians of every maturity level.'
            },
            {
              featuredImage: {
                node: null
              },
              slug: '4-tips-for-when-you-feel-directionless',
              title: '4 Tips for When You Feel Directionless',
              excerpt:
                "Wouldn't it be great if God sent us a daily email that outlined all the things He wanted us to accomplish?"
            },
            {
              featuredImage: {
                node: null
              },
              slug: 'what-to-do-when-you-feel-alone',
              title: 'What To Do When You Feel Alone',
              excerpt: 'At one time or another, we all feel alone.'
            }
          ]
        }}
        variant="premiere"
      />
    )
    expect(
      getByRole('link', {
        name: '10 Bible Verses about Faith and Doubt Issues of faith and doubt have a massive impact on Christians of every maturity level.'
      })
    ).toBeInTheDocument()
    rerender(
      <PostList
        posts={{
          nodes: [
            {
              featuredImage: null,
              slug: '10-bible-verses-about-faith-and-doubt',
              title: '10 Bible Verses about Faith and Doubt',
              excerpt:
                'Issues of faith and doubt have a massive impact on Christians of every maturity level.'
            },
            {
              featuredImage: null,
              slug: '4-tips-for-when-you-feel-directionless',
              title: '4 Tips for When You Feel Directionless',
              excerpt:
                "Wouldn't it be great if God sent us a daily email that outlined all the things He wanted us to accomplish?"
            },
            {
              featuredImage: null,
              slug: 'what-to-do-when-you-feel-alone',
              title: 'What To Do When You Feel Alone',
              excerpt: 'At one time or another, we all feel alone.'
            }
          ]
        }}
        variant="premiere"
      />
    )
    expect(
      getByRole('link', {
        name: '10 Bible Verses about Faith and Doubt Issues of faith and doubt have a massive impact on Christians of every maturity level.'
      })
    ).toBeInTheDocument()
  })
})
