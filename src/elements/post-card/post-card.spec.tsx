import React from 'react'
import { render } from '@testing-library/react'
import {
  HeroPostCard,
  QuotePostCard,
  ItemPostCardNoImage,
  PremierePostCard,
  DefaultPostCard
} from './post-card.composition'

describe('post-card', () => {
  it('should render hero with the correct variant', () => {
    const { getByTestId } = render(<HeroPostCard />)
    expect(getByTestId('heroVariant')).toBeInTheDocument()
  })
  it('should render quote with the correct variant', () => {
    const { getByTestId } = render(<QuotePostCard />)
    expect(getByTestId('quoteVariant')).toBeInTheDocument()
  })
  it('should render item with the correct variant', () => {
    const { getByTestId } = render(<ItemPostCardNoImage />)
    expect(getByTestId('itemVariant')).toBeInTheDocument()
  })
  it('should render premiere with the correct variant', () => {
    const { getByTestId } = render(<PremierePostCard />)
    expect(getByTestId('premiereVariant')).toBeInTheDocument()
  })
  it('should render delfault with the correct variant', () => {
    const { getByTestId } = render(<DefaultPostCard />)
    expect(getByTestId('defaultVariant')).toBeInTheDocument()
  })
})
