import React from 'react'
import { render } from '@testing-library/react'
import { BasicAuthorList } from './author-list.composition'

describe('author-list', () => {
  it('should render the name of the author', () => {
    const { getByText } = render(<BasicAuthorList />)
    expect(getByText('Tez Brooks')).toBeInTheDocument()
  })

  it('should render description about the author', () => {
    const { getByText } = render(<BasicAuthorList />)
    expect(
      getByText(
        'On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades.'
      )
    ).toBeInTheDocument()
  })
})
