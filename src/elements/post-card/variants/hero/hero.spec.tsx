import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { PostCard } from '../..'

describe('post-card-hero', () => {
  it('hero variant should be clickable', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        onClick={handleClick}
        variant="hero"
      />
    )
    fireEvent.click(getByText('Read Story'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('hero variant should display bg image', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <PostCard
        src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/hero-omn21.png"
        title="His Shoes Led to Learning About Christianity"
        onClick={handleClick}
        variant="hero"
      />
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
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        onClick={handleClick}
        variant="hero"
      />
    )
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundSize
    ).toBeFalsy()
    expect(
      window.getComputedStyle(getByTestId('heroVariant')).backgroundImage
    ).toBeFalsy()
  })

  it('renders category and excerpt', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <PostCard
        title="His Shoes Led to Learning About Christianity"
        excerpt="This is an excerpt"
        category="This is a category"
        onClick={handleClick}
        variant="hero"
      />
    )
    expect(getByText('This is an excerpt')).toBeInTheDocument()
    expect(getByText('This is a category')).toBeInTheDocument()
  })
})
