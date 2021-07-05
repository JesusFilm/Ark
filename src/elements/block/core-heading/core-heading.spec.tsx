import React from 'react'
import { render } from '@testing-library/react'
import { CoreHeading } from '.'

it('should render with the correct text', () => {
  const { getByText } = render(
    <CoreHeading
      __typename="CoreHeadingBlock"
      attributes={{
        align: 'left',
        content: 'The parables from Matthew',
        level: 2
      }}
    />
  )
  expect(getByText('The parables from Matthew')).toBeInTheDocument()
})
it('should render with the correct alignment', () => {
  const { getByText } = render(
    <CoreHeading
      __typename="CoreHeadingBlock"
      attributes={{
        align: 'left',
        content: 'The parables from Matthew',
        level: 2
      }}
    />
  )
  expect(
    getByText('The parables from Matthew').classList.contains(
      'MuiTypography-alignLeft'
    )
  ).toBe(true)
})
it('should default to alignment inherit', () => {
  const { getByText } = render(
    <CoreHeading
      __typename="CoreHeadingBlock"
      attributes={{
        align: '',
        content: 'The parables from Matthew',
        level: 2
      }}
    />
  )
  expect(
    getByText('The parables from Matthew').classList.contains(
      'MuiTypography-alignLeft'
    )
  ).toBe(false)
})
