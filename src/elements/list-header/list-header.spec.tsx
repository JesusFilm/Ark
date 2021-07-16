import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import {
  BasicListHeader,
  ListHeaderWithCallback
} from './list-header.composition'

describe('list-header', () => {
  it('should render the title of the list', () => {
    const { getByText } = render(<BasicListHeader />)
    expect(getByText('Authors')).toBeInTheDocument()
  })

  it('should render SEE ALL text', () => {
    const { getByText } = render(<ListHeaderWithCallback />)
    expect(getByText('SEE ALL')).toBeInTheDocument()
  })

  it('should handle onSeeAllClick', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <ListHeaderWithCallback onSeeAllClick={handleClick} />
    )
    fireEvent.click(getByText('SEE ALL'))
    expect(handleClick).toHaveBeenCalled()
    expect(getByText('SEE ALL')).toBeDefined()
  })
})
