import React from 'react'
import { render } from '@testing-library/react'
import { CoreGallery } from '.'

it('should render with the correct text', () => {
  const { getByAltText } = render(
    <CoreGallery
      name="core/gallery"
      attributes={{
        images: [
          {
            fullUrl:
              'http://54.204.85.23/wp-content/uploads/2021/03/1614778286060-2-scaled.jpg',
            alt: 'man in woods'
          },
          {
            fullUrl:
              'http://54.204.85.23/wp-content/uploads/2021/03/1542118249535-2-scaled.jpg',
            alt: 'Jesus in boat'
          },
          {
            fullUrl:
              'http://54.204.85.23/wp-content/uploads/2021/03/1615294462458-3-scaled.jpg',
            alt: 'Jesus with 2 others'
          }
        ]
      }}
    />
  )

  expect(getByAltText('man in woods').getAttribute('src')).toEqual(
    'http://54.204.85.23/wp-content/uploads/2021/03/1614778286060-2-scaled.jpg'
  )
})
