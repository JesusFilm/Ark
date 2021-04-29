import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import {
  HeroPostCard,
  HeroPostCardNoImage,
  PremierePostCard,
  ItemPostCardNoImage,
  ItemPostCardNoImageNoAuthor,
  ItemPostCard,
  QuotePostCard,
  DefaultPostCard
} from './post-card.composition'

describe('post-card', () => {
  it('should render with the correct text', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<HeroPostCard onClick={handleClick} style="hero" />)
    const rendered = getByText('His Shoes Led to Learning About Christianity')
    expect(rendered).toBeTruthy()
  })
})

describe('post-card', () => {
  it('hero variant should be clickable', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<HeroPostCard onClick={handleClick} style="hero" />)
    fireEvent.click(getByText('Read Story'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('hero variant should display bg image', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<HeroPostCard onClick={handleClick} style="hero" />)
    expect(window.getComputedStyle(getByTestId('heroVariantBackground')).backgroundSize).toEqual('cover')
    expect(window.getComputedStyle(getByTestId('heroVariantBackground')).backgroundImage).toEqual('url(https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png)')
  })

  it('hero variant not display bg img if nothing is passed', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<HeroPostCardNoImage onClick={handleClick} style="hero" />)
    expect(window.getComputedStyle(getByTestId('heroVariantBackground')).backgroundSize).toBeFalsy()
    expect(window.getComputedStyle(getByTestId('heroVariantBackground')).backgroundImage).toBeFalsy()
  })

  it('premiere variant should render', () => {
    const { getByText } = render(<PremierePostCard />)
    const rendered = getByText('His Shoes Led to Learning About Christianity')
    expect(rendered).toBeTruthy()
  })

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

  it('quote variant should render', () => {
    const { getByText } = render(<QuotePostCard />)
    const rendered = getByText("The call to prayer eminated from Omar's Lips - an eerie sound, out of place in the park. Omar and a group of 15 men bowed in sync.")
    expect(rendered).toBeTruthy()
  })

  it('default variant should render', () => {
    const { getByText } = render(<DefaultPostCard />)
    const rendered = getByText('His Shoes Led to Learning About Christianity')
    expect(rendered).toBeTruthy()
  })
})
