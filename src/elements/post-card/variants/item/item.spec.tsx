import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '../..'

describe('post-card-item', () => {
  it('item no image variant should render', () => {
    const { getByText } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
        author="Jill Hadlock"
      />
    )
    expect(
      getByText('His Shoes Led to Learning About Christianity')
    ).toBeInTheDocument()
  })

  it('item no image no author variant should render', () => {
    const { getByText } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        variant="item"
      />
    )
    expect(
      getByText('His Shoes Led to Learning About Christianity')
    ).toBeInTheDocument()
  })

  it('item variant should render', () => {
    const { getByText } = render(
      <PostCard
        src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/4-signs-unhealthy-friendship/_jcr_content/content/image.img.jpg/1619195825380.jpg"
        title="His Shoes Led to Learning About Christianity"
        variant="item"
        author="Jill Hadlock"
      />
    )
    expect(
      getByText('His Shoes Led to Learning About Christianity')
    ).toBeInTheDocument()
  })
})
