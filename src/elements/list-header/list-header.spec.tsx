import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ListHeader } from './'

describe('list-header', () => {
  it('should render the title of the list', () => {
    const { getByText } = render(<ListHeader title="Authors" />)
    expect(getByText('Authors')).toBeInTheDocument()
  })

  it('should handle onSeeAllClick', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <ListHeader title="Authors" onSeeAllClick={handleClick} />
    )
    fireEvent.click(getByText('SEE ALL'))
    expect(handleClick).toHaveBeenCalled()
    expect(getByText('SEE ALL')).toBeDefined()
  })
})
