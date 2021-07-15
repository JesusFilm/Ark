import React from 'react'
import { render } from '@testing-library/react'
import { BasicListHeader } from './list-header.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicListHeader />)
  const rendered = getByText('Authors')
  expect(rendered).toBeTruthy()
})
