import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { HeroPostCard, HeroPostCardNoImage } from '../../post-card.composition'

describe('post-card-hero', () => {
  it('hero variant should be clickable', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <HeroPostCard onClick={handleClick} variant="hero" />
    )
    fireEvent.click(getByText('Read Everything'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('hero variant should display bg image', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <HeroPostCard onClick={handleClick} variant="hero" />
    )
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundSize
    ).toEqual('cover')
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundImage
    ).toEqual(
      'url(https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png)'
    )
  })

  it('hero variant not display bg img if nothing is passed', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <HeroPostCardNoImage onClick={handleClick} variant="hero" />
    )
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundSize
    ).toBeFalsy()
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundImage
    ).toBeFalsy()
  })
})
