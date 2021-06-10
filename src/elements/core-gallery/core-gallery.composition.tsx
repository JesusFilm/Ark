import React from 'react'
import { CoreGallery } from './core-gallery'

export const BasicCoreGallery = () => (
  <CoreGallery
    {...{
      name: 'core/gallery',
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
    }}
  />
)
