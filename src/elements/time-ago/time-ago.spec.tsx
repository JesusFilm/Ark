import React from 'react'
import { render } from '@testing-library/react'
import { BasicTimeAgo } from './time-ago.composition'

describe('time-ago', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTimeAgo />)
    const rendered = getByText('5 days ago')
    expect(rendered).toBeTruthy()
  })
})
