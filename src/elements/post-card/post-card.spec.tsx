import React from 'react'
import { render } from '@testing-library/react'
import { HeroPostCard } from './post-card.composition'

describe('post-card', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<HeroPostCard />)
    const rendered = getByText('His Shoes Led to Learning About Christianity')
    expect(rendered).toBeTruthy()
  })
})
