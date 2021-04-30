import React from 'react'
import { render } from '@testing-library/react'
import { EnTimeAgo } from './time-ago.composition'

describe('time-ago', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<EnTimeAgo />)
    const rendered = getByText('ago')
    expect(rendered).toBeTruthy()
  })
})
