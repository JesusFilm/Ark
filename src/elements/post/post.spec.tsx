import React from 'react'
import { render } from '@testing-library/react'
import { BasicPost } from './post.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPost />)
  expect(
    getByText(
      "This parable further explains why God's kingdom would make room for those from outside of Israel."
    )
  ).toBeDefined()
})
