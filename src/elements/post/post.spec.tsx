import React from 'react'
import { render } from '@testing-library/react'
import { BasicPost } from './post.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPost />)
  expect(getByText('Jesus Film Project')).toBeInTheDocument()
})
