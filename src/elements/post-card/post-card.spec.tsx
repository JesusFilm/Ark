import React from 'react'
import { render } from '@testing-library/react'
import { PostCard } from '.'

describe('post-card', () => {
  it('should render hero', () => {
    const { getByTestId } = render(<PostCard title="abc" variant="hero" />)
    expect(getByTestId('heroVariant')).toBeInTheDocument()
  })
  it('should render quote', () => {
    const { getByTestId } = render(
      <PostCard
        customPostFields={{ quote: 'abc' }}
        date="2021-06-15T22:00:35.664Z"
        title="abc"
        variant="quote"
      />
    )
    expect(getByTestId('quoteVariant')).toBeInTheDocument()
  })
  it('should render item', () => {
    const { getByTestId } = render(<PostCard title="abc" variant="item" />)
    expect(getByTestId('itemVariant')).toBeInTheDocument()
  })
  it('should render premiere', () => {
    const { getByTestId } = render(<PostCard title="abc" variant="premiere" />)
    expect(getByTestId('premiereVariant')).toBeInTheDocument()
  })
  it('should render delfault', () => {
    const { getByTestId } = render(<PostCard title="abc" variant="default" />)
    expect(getByTestId('defaultVariant')).toBeInTheDocument()
  })
})
