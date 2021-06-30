import React from 'react'
import { render } from '@testing-library/react'
import { CoreHeading } from '.'

it('should render with the correct text', () => {
  const { getByText } = render(
    <CoreHeading
      {...{
        name: 'core/heading',
        attributes: {
          align: 'left',
          content: 'The parables from Matthew',
          level: 2
        }
      }}
    />
  )
  const rendered = getByText('The parables from Matthew')
  expect(rendered).toBeTruthy()
})
it('should render with the correct alignment', () => {
  const { getByText } = render(
    <CoreHeading
      {...{
        name: 'core/heading',
        attributes: {
          align: 'left',
          content: 'The parables from Matthew',
          level: 2
        }
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
      {...{
        name: 'core/heading',
        attributes: {
          align: '',
          content: 'The parables from Matthew',
          level: 2
        }
      }}
    />
  )
  expect(
    getByText('The parables from Matthew').classList.contains(
      'MuiTypography-alignLeft'
    )
  ).toBe(false)
})
