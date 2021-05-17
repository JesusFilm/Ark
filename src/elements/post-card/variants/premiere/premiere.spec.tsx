import React from 'react'
import { render } from '@testing-library/react'
import {
  PremierePostCard
} from '../../post-card.composition'

describe('post-card-premiere', () => {
  it('premiere variant should render', () => {
    const { getByText } = render(<PremierePostCard />)
    const rendered = getByText('His Shoes Led to Learning About Christianity')
    expect(rendered).toBeTruthy()
  })
})
