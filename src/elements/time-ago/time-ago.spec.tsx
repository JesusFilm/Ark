import React from 'react'
import { render } from '@testing-library/react'
import { BasicTimeAgo, RuTimeAgo } from './time-ago.composition'

describe('time-ago', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTimeAgo />)
    const rendered = getByText('5 days ago')
    expect(rendered).toBeTruthy()
  })
  it('should render with the correct locale', () => {
    const { getByText } = render(<RuTimeAgo />)
    const rendered = getByText('5 дней назад')
    expect(rendered).toBeTruthy()
  })
})
