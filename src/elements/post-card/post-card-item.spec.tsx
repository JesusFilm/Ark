import React from 'react'
import { render } from '@testing-library/react'
import {
  ItemPostCardNoImage,
  ItemPostCardNoImageNoAuthor,
  ItemPostCard,
} from './post-card.composition'

describe('post-card-item', () => {
  it('item no image variant should render', () => {
    const { getByText } = render(<ItemPostCardNoImage />)
    const rendered = getByText('His Shoes Led to Learning About Christianity')
    expect(rendered).toBeTruthy()
  })

  it('item no image no author variant should render', () => {
    const { getByText } = render(<ItemPostCardNoImageNoAuthor />)
    const rendered = getByText('His Shoes Led to Learning About Christianity')
    expect(rendered).toBeTruthy()
  })

  it('item variant should render', () => {
    const { getByText } = render(<ItemPostCard />)
    const rendered = getByText('His Shoes Led to Learning About Christianity')
    expect(rendered).toBeTruthy()
  })
})
