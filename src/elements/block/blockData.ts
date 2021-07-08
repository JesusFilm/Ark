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
  },
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'https://youtu.be/UGFCbmvk0vo',
      providerNameSlug: 'youtube'
    }
  },
  // different youtube format tests
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'http://www.youtube.com/watch?v=-wtIMTCHWuI',
      providerNameSlug: 'youtube'
    }
  },
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'https://www.youtube.com/watch?v=-wtIMTCHWuI&ab_channel=TechCrunch',
      providerNameSlug: 'youtube'
    }
  },
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'https://www.youtube.com/watch?v=yZv2daTWRZU&feature=em-uploademail',
      providerNameSlug: 'youtube'
    }
  },
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'https://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index',
      providerNameSlug: 'youtube'
    }
  },
  // end
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
      providerNameSlug: 'embed-handler'
    }
  },
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'https://vimeo.com/10679287',
      providerNameSlug: 'vimeo'
    }
  },
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'https://player.vimeo.com/video/10679287',
      providerNameSlug: 'vimeo'
    }
  },
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'https://player.vimeo.com/video/10679287',
      providerNameSlug: ''
    }
  },
  {
    __typename: 'CoreEmbedBlock',
    attributes: {
      url: 'https://player.vimeo.com/video/10679287',
      providerNameSlug: 'vim'
    }
  },
  {
    __typename: 'CoreQuoteBlock',
    attributes: {
      value:
        '"Many people spend their lives trying to create a lasting legacy on earth. They want to be remembered when they\'re gone. Yet, what ultimately matters most will not be what others say about your life but what God says."',
      citation: 'Citation for this quote goes here'
    }
  }
] as BlockProps[]
