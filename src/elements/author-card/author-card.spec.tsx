import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { BasicAuthorCard } from './author-card.composition'

describe('author-card', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicAuthorCard name='roger smith' />)
    const element = getByText('roger smith')
    expect(element).toBeDefined()
    fireEvent.click(element)
    expect(getByText('RS')).toBeDefined()
  })
  it('should handle onClick', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<BasicAuthorCard onClick={handleClick} />)
    fireEvent.click(getByText('Tez Brooks'))
    expect(handleClick).toHaveBeenCalled()
    expect(getByText('TB')).toBeDefined()
  })
})
