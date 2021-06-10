import React from 'react'
import { render } from '@testing-library/react'
import { BasicCoreGallery } from './core-gallery.composition'

it('should render with the correct text', () => {
  const { getByAltText } = render(<BasicCoreGallery />)

  expect(getByAltText('man in woods').getAttribute('src')).toEqual(
    'http://54.204.85.23/wp-content/uploads/2021/03/1614778286060-2-scaled.jpg'
  )
})
