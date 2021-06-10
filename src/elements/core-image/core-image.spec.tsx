import React from 'react'
import { render } from '@testing-library/react'
import { BasicCoreImage } from './core-image.composition'

it('should render with the correct text', () => {
  const { getByRole } = render(<BasicCoreImage />)

  expect(getByRole('img').getAttribute('src')).toEqual(
    'http://54.204.85.23/wp-content/uploads/2020/12/1614778286060.jpg'
  )
})
