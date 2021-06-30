import React from 'react'
import { render } from '@testing-library/react'
import { BasicPostCoreHeading } from './post-core-heading.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPostCoreHeading />)
  const rendered = getByText('hello from PostCoreHeading')
  expect(rendered).toBeTruthy()
})
