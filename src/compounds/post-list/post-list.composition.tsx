import React, { createElement } from 'react'
import { PostList } from '.'
import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'

export const PremiereThreePosts = () => (
  <JesusFilmThemeProvider>
    <PostList
      PostLink={({ children, href, className }) =>
        createElement('a', { children, className, href: `/posts/${href}` })
      }
      variant="premiere"
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
              "Issues of faith and doubt have a massive impact on Christians of every maturity level. And sometimes, the topic is presented in ways that are confusing and only increase people's anxiety about their doubt."
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
          },
          {
            featuredImage: {
              node: {
                sourceUrl: 'https://source.unsplash.com/1920x1080/daily?alone'
              }
            },
            slug: 'what-to-do-when-you-feel-alone',
            title: 'What To Do When You Feel Alone',
            excerpt:
              "At one time or another, we all feel alone. And sometimes that feeling is amplified by the people we're around. Most of us have had moments where we feel utterly alone in a crowd. Sometimes that loneliness is exacerbated by the expectation that Christian community should insulate us from ever feeling that way."
          }
        ]
      }}
    />
  </JesusFilmThemeProvider>
)

export const PremiereTwoPosts = () => (
  <JesusFilmThemeProvider>
    <PostList
      PostLink={({ children, href, className }) =>
        createElement('a', { children, className, href: `/posts/${href}` })
      }
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
              "Issues of faith and doubt have a massive impact on Christians of every maturity level. And sometimes, the topic is presented in ways that are confusing and only increase people's anxiety about their doubt."
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
      variant="premiere"
    />
  </JesusFilmThemeProvider>
)

export const PremiereOnePost = () => (
  <JesusFilmThemeProvider>
    <PostList
      PostLink={({ children, href, className }) =>
        createElement('a', { children, className, href: `/posts/${href}` })
      }
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
              "Issues of faith and doubt have a massive impact on Christians of every maturity level. And sometimes, the topic is presented in ways that are confusing and only increase people's anxiety about their doubt."
          }
        ]
      }}
      variant="premiere"
    />
  </JesusFilmThemeProvider>
)

export const PremiereFivePosts = () => (
  <JesusFilmThemeProvider>
    <PostList
      PostLink={({ children, href, className }) =>
        createElement('a', { children, className, href: `/posts/${href}` })
      }
      variant="premiere"
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
              "Issues of faith and doubt have a massive impact on Christians of every maturity level. And sometimes, the topic is presented in ways that are confusing and only increase people's anxiety about their doubt."
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
          },
          {
            featuredImage: {
              node: {
                sourceUrl: 'https://source.unsplash.com/1920x1080/daily?alone'
              }
            },
            slug: 'what-to-do-when-you-feel-alone',
            title: 'What To Do When You Feel Alone',
            excerpt:
              "At one time or another, we all feel alone. And sometimes that feeling is amplified by the people we're around. Most of us have had moments where we feel utterly alone in a crowd. Sometimes that loneliness is exacerbated by the expectation that Christian community should insulate us from ever feeling that way."
          },
          {
            featuredImage: {
              node: {
                sourceUrl: 'https://source.unsplash.com/1920x1080/daily?city'
              }
            },
            slug: 'Why-You-Should-Know-Your-Neighbors-Better-and-How-to-Do-it',
            title:
              'Why You Should Know Your Neighbors Better, and How to Do it',
            excerpt:
              'Getting to know your neighbors is trending in the wrong direction. In 2019, Pew Research Center reported that 57% of Americans claimed to know some of their neighbors, and 26% said they knew most of their neighbors.'
          },
          {
            featuredImage: {
              node: {
                sourceUrl:
                  'https://source.unsplash.com/1920x1080/daily?friendship'
              }
            },
            slug: '15-Bible-Verses-about-Friends-and-Friendship',
            title: '15 Bible Verses about Friends and Friendship',
            excerpt:
              'For Christians, witnessing is sharing your personal experience with Jesus. It might seem like a strange word to use in talking about your faith, but once you understand how the Bible uses the term, it makes a lot more sense???and becomes a meaningful part of your Christian life.'
          }
        ]
      }}
    />
  </JesusFilmThemeProvider>
)

export const ItemPosts = () => (
  <JesusFilmThemeProvider>
    <PostList
      PostLink={({ children, href, className }) =>
        createElement('a', { children, className, href: `/posts/${href}` })
      }
      variant="item"
      posts={{
        nodes: [
          {
            slug: '10-bible-verses-about-faith-and-doubt',
            title: '10 Bible Verses about Faith and Doubt'
          },
          {
            author: {
              node: {
                name: 'Josh McDowell',
                slug: 'josh'
              }
            },
            slug: '4-tips-for-when-you-feel-directionless',
            title: '4 Tips for When You Feel Directionless'
          },
          {
            slug: 'what-to-do-when-you-feel-alone',
            title: 'What To Do When You Feel Alone'
          },
          {
            featuredImage: {
              node: {
                sourceUrl:
                  'https://source.unsplash.com/1920x1080/daily?friendship'
              }
            },
            author: {
              node: {
                name: 'Roger Smith',
                slug: 'roger'
              }
            },
            slug: 'Why-You-Should-Know-Your-Neighbors-Better-and-How-to-Do-it',
            title: 'Why You Should Know Your Neighbors Better, and How to Do it'
          },
          {
            author: {
              node: {
                name: 'Mike Smith',
                slug: 'mike'
              }
            },
            slug: '15-Bible-Verses-about-Friends-and-Friendship',
            title: '15 Bible Verses about Friends and Friendship'
          }
        ]
      }}
    />
  </JesusFilmThemeProvider>
)

export const DefaultPosts = () => (
  <JesusFilmThemeProvider>
    <PostList
      PostLink={({ children, href, className }) =>
        createElement('a', { children, className, href: `/posts/${href}` })
      }
      {...{
        variant: 'default',
        posts: {
          nodes: [
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/1920x1080/daily?doubt'
                }
              },
              slug: '10-bible-verses-about-faith-and-doubt',
              title: '10 Bible Verses about Faith and Doubt',
              categories: {
                nodes: [
                  {
                    name: 'Reaching the Nations',
                    slug: 'reaching-the-nations'
                  }
                ]
              },
              excerpt:
                'Getting to know your neighbors is trending in the wrong direction. In 2019, Pew Research Center reported that 57% of Americans claimed to know some of their neighbors, and 26% said they knew most of their neighbors.',
              date: '2021-06-15T22:00:35.664Z'
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
              categories: {
                nodes: [
                  {
                    name: 'Reaching the Nations',
                    slug: 'reaching-the-nations'
                  }
                ]
              },
              excerpt:
                'Getting to know your neighbors is trending in the wrong direction. In 2019, Pew Research Center reported that 57% of Americans claimed to know some of their neighbors, and 26% said they knew most of their neighbors.',
              date: '2021-06-15T22:00:35.664Z'
            },
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/1920x1080/daily?alone'
                }
              },
              slug: 'what-to-do-when-you-feel-alone',
              title: 'What To Do When You Feel Alone',
              author: {
                node: {
                  name: 'Josh McDowell',
                  slug: 'josh'
                }
              }
            },
            {
              featuredImage: {
                node: {
                  sourceUrl: 'https://source.unsplash.com/1920x1080/daily?city'
                }
              },
              slug: 'Why-You-Should-Know-Your-Neighbors-Better-and-How-to-Do-it',
              title:
                'Why You Should Know Your Neighbors Better, and How to Do it',
              categories: {
                nodes: [
                  {
                    name: 'Reaching the Nations',
                    slug: 'reaching-the-nations'
                  }
                ]
              },
              excerpt:
                'Getting to know your neighbors is trending in the wrong direction. In 2019, Pew Research Center reported that 57% of Americans claimed to know some of their neighbors, and 26% said they knew most of their neighbors.',
              date: '2021-06-15T22:00:35.664Z'
            },
            {
              featuredImage: {
                node: {
                  sourceUrl:
                    'https://source.unsplash.com/1920x1080/daily?friendship'
                }
              },
              slug: '15-Bible-Verses-about-Friends-and-Friendship',
              title: '15 Bible Verses about Friends and Friendship'
            }
          ]
        }
      }}
    />
  </JesusFilmThemeProvider>
)
