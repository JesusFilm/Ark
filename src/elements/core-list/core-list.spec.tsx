import React from 'react'
import { render } from '@testing-library/react'
import { OrderedCoreList, UnorderedCoreList } from './core-list.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<OrderedCoreList />)
  const rendered = getByText('1. Where it is located in Scripture')
  expect(rendered).toBeTruthy()
})

it('should render unordered', () => {
  const { getByText } = render(<UnorderedCoreList />)
  const rendered = getByText('- Where it is located in Scripture')
  expect(rendered).toBeTruthy()
})
