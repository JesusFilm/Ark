import type { BlockProps } from '.'

export const blocks = [
  {
    attributes: {
      content:
        "When people talk about the ministry of Jesus, it's easy to focus on his miracles. Jesus performed some amazing feats that the world had never seen (and hasn’t seen since). But one of the most exciting things about His ministry was His teaching style."
    },
    __typename: 'CoreParagraphBlock'
  },
  {
    __typename: 'CoreListBlock',
    attributes: {
      ordered: false,
      values:
        '<li>Where it is located in Scripture</li><li>Who was present for this teaching</li><li>Why it was given</li><li>What is the key verse</li>'
    }
  },
  {
    __typename: 'CoreHeadingBlock',
    attributes: {
      align: '',
      textAlign: '',
      content: 'The parables from Matthew',
      level: 2
    }
  },
  {
    __typename: 'CoreImageBlock',
    attributes: {
      id: 23,
      href: '',
      title: '',
      url: 'http://54.204.85.23/wp-content/uploads/2020/12/1614778286060.jpg',
      alt: '',
      anchor: '',
      align: ''
    }
  },
  {
    __typename: 'CoreGalleryBlock',
    attributes: {
      images: [
        {
          fullUrl:
            'http://54.204.85.23/wp-content/uploads/2021/03/1614778286060-2-scaled.jpg',
          link: 'http://54.204.85.23/1614778286060-2/',
          alt: 'man in woods'
        },
        {
          fullUrl:
            'http://54.204.85.23/wp-content/uploads/2021/03/1542118249535-2-scaled.jpg',
          link: 'http://54.204.85.23/1542118249535-2/',
          alt: 'Jesus in boat'
        },
        {
          fullUrl:
            'http://54.204.85.23/wp-content/uploads/2021/03/1615294462458-3-scaled.jpg',
          link: 'http://54.204.85.23/1615294462458-3/',
          alt: 'Jesus with 2 others'
        }
      ]
    }
  }
] as BlockProps[]