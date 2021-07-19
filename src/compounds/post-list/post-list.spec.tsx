import React from 'react'
import { render } from '@testing-library/react'
import { PostList } from '.'

describe('PostList', () => {
  it('should render a single post', () => {
    const { getAllByTestId } = render(
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
    const link = getAllByTestId('link-10-bible-verses-about-faith-and-doubt')
    expect(link[0]).toHaveAttribute(
      'href',
      '/posts/10-bible-verses-about-faith-and-doubt'
    )
    expect(link[0].parentElement).toHaveClass('MuiGrid-root MuiGrid-item')
  })

  it('should render two posts', () => {
    const { getAllByTestId } = render(
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
    const link1 = getAllByTestId('link-10-bible-verses-about-faith-and-doubt')
    expect(link1[0]).toHaveAttribute(
      'href',
      '/posts/10-bible-verses-about-faith-and-doubt'
    )
    expect(link1[0].parentElement).toHaveClass('MuiGrid-root MuiGrid-item')
    const link2 = getAllByTestId('link-4-tips-for-when-you-feel-directionless')
    expect(link2[0]).toHaveAttribute(
      'href',
      '/posts/4-tips-for-when-you-feel-directionless'
    )
  })

  it('should render three posts', () => {
    const { getAllByTestId } = render(
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
    const link1 = getAllByTestId('link-10-bible-verses-about-faith-and-doubt')
    expect(link1[0]).toHaveAttribute(
      'href',
      '/posts/10-bible-verses-about-faith-and-doubt'
    )
    expect(link1[0].parentElement).toHaveClass('MuiGrid-root MuiGrid-item')
    expect(
      getAllByTestId('link-4-tips-for-when-you-feel-directionless')[0]
    ).toHaveAttribute('href', '/posts/4-tips-for-when-you-feel-directionless')
    expect(
      getAllByTestId('link-what-to-do-when-you-feel-alone')[0]
    ).toHaveAttribute('href', '/posts/what-to-do-when-you-feel-alone')
  })

  it('should render without error', () => {
    const { rerender, getByRole } = render(
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
    expect(
      getByRole('link', {
        name: 'Issues of faith and doubt have a massive impact on Christians of every maturity level.'
      })
    ).toBeInTheDocument()
    rerender(
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
        name: 'Issues of faith and doubt have a massive impact on Christians of every maturity level.'
      })
    ).toBeInTheDocument()
    rerender(
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
        name: 'Issues of faith and doubt have a massive impact on Christians of every maturity level.'
      })
    ).toBeInTheDocument()
  })

  it('should render item post list', () => {
    const { getByTestId, getAllByTestId } = render(
      <PostList
        PostLink={({ children, href, className }) => (
          <a
            data-testid={`post-${href}`}
            className={className}
            href={`/posts/${href}`}>
            {children}
          </a>
        )}
        AuthorLink={({ children, href, className }) => (
          <a
            data-testid={`author-${href}`}
            className={className}
            href={`/posts/${href}`}>
            {children}
          </a>
        )}
        posts={{
          nodes: [
            {
              slug: '10-bible-verses-about-faith-and-doubt',
              title: '10 Bible Verses about Faith and Doubt',
              author: {
                node: {
                  slug: 'john-doe',
                  name: 'John Doe'
                }
              }
            },
            {
              slug: '4-tips-for-when-you-feel-directionless',
              title: '4 Tips for When You Feel Directionless'
            },
            {
              slug: 'what-to-do-when-you-feel-alone',
              title: 'What To Do When You Feel Alone'
            }
          ]
        }}
        variant="item"
      />
    )
    expect(
      getByTestId('post-10-bible-verses-about-faith-and-doubt')
    ).toBeInTheDocument()
    expect(getByTestId('author-john-doe')).toBeInTheDocument()
    expect(getAllByTestId('divider').length).toEqual(2)
  })

  it('should render default post list', () => {
    const { getByTestId } = render(
      <PostList
        PostLink={({ children, href, className }) => (
          <a
            data-testid={`post-${href}`}
            className={className}
            href={`/posts/${href}`}>
            {children}
          </a>
        )}
        CategoryLink={({ children, href, className }) => (
          <a
            data-testid={`category-${href}`}
            className={className}
            href={`/posts/${href}`}>
            {children}
          </a>
        )}
        posts={{
          nodes: [
            {
              slug: '10-bible-verses-about-faith-and-doubt',
              title: '10 Bible Verses about Faith and Doubt',
              categories: {
                nodes: [
                  {
                    slug: 'following-jesus',
                    name: 'Following Jesus'
                  }
                ]
              }
            },
            {
              slug: '4-tips-for-when-you-feel-directionless',
              title: '4 Tips for When You Feel Directionless'
            },
            {
              slug: 'what-to-do-when-you-feel-alone',
              title: 'What To Do When You Feel Alone'
            }
          ]
        }}
        variant="default"
      />
    )
    expect(
      getByTestId('post-10-bible-verses-about-faith-and-doubt')
    ).toBeInTheDocument()
    expect(getByTestId('category-following-jesus')).toBeInTheDocument()
  })
})
