import React from 'react'
import { render } from '@testing-library/react'
import { BasicAuthorCard } from './author-card.composition'

describe('author-card', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicAuthorCard />)
    const rendered = getByText('Tez Brooks')
    expect(rendered).toBeTruthy()
  })
})
