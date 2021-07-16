import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { BasicListHeader } from './list-header.composition'

describe('list-header', () => {
  it('should render the title of the list', () => {
    const { getByText } = render(<BasicListHeader />)
    expect(getByText('Authors')).toBeInTheDocument()
  })

  it('should render SEE ALL if there is a callback', () => {
    const { getByText } = render(<BasicListHeader />)
    expect(getByText('SEE ALL')).toBeInTheDocument()
  })

  it('should handle onSeeAllClick', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <BasicListHeader onSeeAllClick={handleClick} />
    )
    fireEvent.click(getByText('SEE ALL'))
    expect(handleClick).toHaveBeenCalled()
    expect(getByText('SA')).toBeDefined()
  })
})
