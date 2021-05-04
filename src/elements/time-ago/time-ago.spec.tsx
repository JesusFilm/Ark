import React from 'react'
import { render } from '@testing-library/react'
import { BasicTimeAgo, Bn_INTimeAgo } from './time-ago.composition'

describe('time-ago', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTimeAgo />)
    const rendered = getByText('5 days ago')
    expect(rendered).toBeTruthy()
  })
  it('should render with the correct locale', () => {
    const { getByText } = render(<Bn_INTimeAgo />)
    const rendered = getByText('5 এর দিন আগে')
    expect(rendered).toBeTruthy()
  })
})
