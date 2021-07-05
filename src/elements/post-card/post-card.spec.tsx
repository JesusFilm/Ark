import React from 'react'
import { render, screen } from '@testing-library/react'
import {
  HeroPostCard,
  QuotePostCard,
  ItemPostCardNoImage,
  PremierePostCard,
  DefaultPostCard
} from './post-card.composition'

describe('post-card', () => {
  it('should render hero with the correct variant', () => {
    render(<HeroPostCard />)
    const heroVariant = screen.getByTestId('heroVariant')
    expect(heroVariant).toBeTruthy()
  })
  it('should render quote with the correct variant', () => {
    render(<QuotePostCard />)
    const quoteVariant = screen.getByTestId('quoteVariant')
    expect(quoteVariant).toBeTruthy()
  })
  it('should render item with the correct variant', () => {
    render(<ItemPostCardNoImage />)
    const itemVariant = screen.getByTestId('itemVariant')
    expect(itemVariant).toBeTruthy()
  })
  it('should render premiere with the correct variant', () => {
    render(<PremierePostCard />)
    const premiereVariant = screen.getByTestId('premiereVariant')
    expect(premiereVariant).toBeTruthy()
  })
  it('should render delfault with the correct variant', () => {
    render(<DefaultPostCard />)
    const defaultVariant = screen.getByTestId('defaultVariant')
    expect(defaultVariant).toBeTruthy()
  })
})
