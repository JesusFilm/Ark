import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import {
  QuotePostCard,
} from './post-card.composition'

describe('post-card-quote', () => {
  it('quote variant should render', () => {
    const { getByText } = render(<QuotePostCard />)
    const rendered = getByText("The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync.")
    expect(rendered).toBeTruthy()
  })
})