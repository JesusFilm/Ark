import React from 'react'
import { render } from '@testing-library/react'
import { BasicCoreHeading } from './core-heading.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCoreHeading />)
  const rendered = getByText('The parables from Matthew')
  expect(rendered).toBeTruthy()
})
