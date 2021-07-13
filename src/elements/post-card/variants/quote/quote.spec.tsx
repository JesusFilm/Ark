import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '../..'

describe('post-card', () => {
  it('quote variant should render', () => {
    const { getByText } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        customPostFields={{
          quote:
            'If you can?” said Jesus. "Everything is possible for one who believes."'
        }}
        date="2021-06-15T22:00:35.664Z"
        variant="quote"
      />
    )
    expect(
      getByText(
        'If you can?” said Jesus. "Everything is possible for one who believes."'
      )
    ).toBeInTheDocument()
  })
})
