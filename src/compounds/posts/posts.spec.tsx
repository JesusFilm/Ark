import React from 'react'
import { render } from '@testing-library/react'
import { BasicPosts } from './posts.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPosts />)
  const rendered = getByText('hello from Posts')
  expect(rendered).toBeTruthy()
})
