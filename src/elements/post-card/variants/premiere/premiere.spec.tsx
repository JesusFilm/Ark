import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '../..'

describe('post-card-premiere', () => {
  it('premiere variant should render', () => {
    const { getByText } = render(
      <PostCard
        src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
        title="His Shoes Led to Learning About Christianity"
        excerpt="The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync."
        variant="premiere"
      />
    )
    expect(
      getByText('His Shoes Led to Learning About Christianity')
    ).toBeInTheDocument()
  })
})
