import React from 'react'
import { render } from '@testing-library/react'
import { CoreImage } from '.'

it('should render with the correct text', () => {
  const { getByRole } = render(
    <CoreImage
      __typename="CoreImageBlock"
      attributes={{
        id: 23,
        title: '',
        url: 'http://54.204.85.23/wp-content/uploads/2020/12/1614778286060.jpg',
        alt: ''
      }}
    />
  )

  expect(getByRole('img').getAttribute('src')).toEqual(
    'http://54.204.85.23/wp-content/uploads/2020/12/1614778286060.jpg'
  )
})
