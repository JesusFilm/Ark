import React from 'react'
import { render } from '@testing-library/react'
import {
  AuthorListWithHeader,
  BasicAuthorList
} from './author-list.composition'

describe('author-list', () => {
  it('should render the name of the author', () => {
    const { getByText } = render(<BasicAuthorList />)
    expect(getByText('Tez Brooks')).toBeInTheDocument()
  })

  it('should render the list header', () => {
    const { getByText } = render(<AuthorListWithHeader />)
    expect(getByText('Authors')).toBeInTheDocument()
  })
})
