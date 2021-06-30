import React from 'react'
import { render } from '@testing-library/react'
import { BasicCoreHeading, LeftCoreHeading } from './core-heading.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<LeftCoreHeading />)
  const rendered = getByText('The parables from Matthew')
  expect(rendered).toBeTruthy()
})
it('should render with the correct alignment', () => {
  const { getByText } = render(<LeftCoreHeading />)
  expect(
    getByText('The parables from Matthew').classList.contains(
      'MuiTypography-alignLeft'
    )
  ).toBe(true)
})
it('should default to alignment inherit', () => {
  const { getByText } = render(<BasicCoreHeading />)
  expect(
    getByText('The parables from Matthew').classList.contains(
      'MuiTypography-alignLeft'
    )
  ).toBe(false)
})
