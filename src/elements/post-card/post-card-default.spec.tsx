import React from 'react'
import { render } from '@testing-library/react'
import {
  DefaultPostCard
} from './post-card.composition'

describe('post-card-default', () => {
  it('default variant should render', () => {
    const { getByText } = render(<DefaultPostCard />)
    const rendered = getByText('His Shoes Led to Learning About Christianity')
    expect(rendered).toBeTruthy()
  })
})
