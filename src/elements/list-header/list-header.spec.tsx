import React from 'react'
import { render } from '@testing-library/react'
import { ListHeader } from './'

describe('list-header', () => {
  it('should render the title of the list', () => {
    const { getByText } = render(<ListHeader title="Authors" />)
    expect(getByText('Authors')).toBeInTheDocument()
  })
})
