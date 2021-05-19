import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { BasicFooter } from './footer.composition'

it('should render menu with dropdown', async () => {
  const { getByText, queryByText } = render(<BasicFooter />)
  expect(getByText('Resources')).toBeTruthy()
  const itemWithNestedList = getByText('Strategies and Tools')
  fireEvent.click(itemWithNestedList)
  await waitFor(() => expect(queryByText('Resources')).toBeFalsy())
  fireEvent.click(itemWithNestedList)
  await waitFor(() => expect(queryByText('Resources')).toBeTruthy())
})
