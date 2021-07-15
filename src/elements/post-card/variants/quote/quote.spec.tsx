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

  it('renders custom post link', () => {
    const { getByTestId } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        customPostFields={{
          quote:
            'If you can?” said Jesus. "Everything is possible for one who believes."'
        }}
        date="2021-06-15T22:00:35.664Z"
        variant="quote"
        slug="post-slug"
        PostLink={(props) => <a {...props} data-testid="post-link" />}
      />
    )
    const link = getByTestId('post-link')
    expect(link).toBeInTheDocument()
    expect(link.textContent).toEqual(
      'His Shoes Led to Learning About Christianity'
    )
    expect(link.getAttribute('href')).toEqual('post-slug')
  })
})
