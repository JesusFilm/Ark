import React from 'react'
import { render } from '@testing-library/react'
import { BasicBanner } from './banner.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBanner />)
  const rendered = getByText('hello from Banner')
  expect(rendered).toBeTruthy()
})
