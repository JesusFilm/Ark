import React from 'react'
import { render } from '@testing-library/react'
import { JesusFilmSymbol } from '.'

describe('jesus-film-symbol', () => {
  it('should render with red symbol by default', () => {
    const { getByRole } = render(<JesusFilmSymbol />)

    expect(
      getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')
    ).toEqual('red.png')
  })

  it('should render with red symbol', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="red" />)

    expect(
      getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')
    ).toEqual('red.png')
  })

  it('should render with red symbol and Jesus text', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="red" text />)

    expect(
      getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')
    ).toEqual('red-text.svg')
  })

  it('should render with cool-gray symbol', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="cool-gray" />)

    expect(
      getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')
    ).toEqual('cool-gray.png')
  })

  it('should render with cool-gray symbol and Jesus text', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="cool-gray" text />)

    expect(
      getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')
    ).toEqual('cool-gray-text.svg')
  })

  it('should render with warm-white symbol', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="warm-white" />)

    expect(
      getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')
    ).toEqual('warm-white.png')
  })

  it('should render with warm-white symbol and Jesus text', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="warm-white" text />)

    expect(
      getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')
    ).toEqual('warm-white-text.svg')
  })

  it('should render with white symbol', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="white" />)

    expect(
      getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')
    ).toEqual('white.png')
  })
})

it('should render with white symbol and Jesus text', () => {
  const { getByRole } = render(<JesusFilmSymbol variant="white" text />)

  expect(
    getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')
  ).toEqual('white-text.svg')
})
