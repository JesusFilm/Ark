import React from 'react'
import { render } from '@testing-library/react'
import { BasicCoreList } from './core-list.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCoreList />)
  const rendered = getByText('Where it is located in Scripture')
  expect(rendered).toBeTruthy()
})
