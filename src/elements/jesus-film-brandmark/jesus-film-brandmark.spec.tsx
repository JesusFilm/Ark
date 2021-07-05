import React from 'react'
import { render } from '@testing-library/react'
import { JesusFilmBrandmark } from '.'

describe('jesus-film-brandmark', () => {
  it('should render with red brandmark by default', () => {
    const { getByRole } = render(<JesusFilmBrandmark />)

    expect(
      getByRole('img', { name: 'jesus-film-brandmark' }).getAttribute('src')
    ).toEqual('red.png')
  })

  it('should render with red brandmark', () => {
    const { getByRole } = render(<JesusFilmBrandmark variant="red" />)

    expect(
      getByRole('img', { name: 'jesus-film-brandmark' }).getAttribute('src')
    ).toEqual('red.png')
  })

  it('should render with cool-gray brandmark', () => {
    const { getByRole } = render(<JesusFilmBrandmark variant="cool-gray" />)

    expect(
      getByRole('img', { name: 'jesus-film-brandmark' }).getAttribute('src')
    ).toEqual('cool-gray.png')
  })

  it('should render with red-cool-gray brandmark', () => {
    const { getByRole } = render(<JesusFilmBrandmark variant="red-cool-gray" />)

    expect(
      getByRole('img', { name: 'jesus-film-brandmark' }).getAttribute('src')
    ).toEqual('red-cool-gray.png')
  })

  it('should render with red-warm-gray brandmark', () => {
    const { getByRole } = render(<JesusFilmBrandmark variant="red-warm-gray" />)

    expect(
      getByRole('img', { name: 'jesus-film-brandmark' }).getAttribute('src')
    ).toEqual('red-warm-gray.png')
  })

  it('should render with warm-white brandmark', () => {
    const { getByRole } = render(<JesusFilmBrandmark variant="warm-white" />)

    expect(
      getByRole('img', { name: 'jesus-film-brandmark' }).getAttribute('src')
    ).toEqual('warm-white.png')
  })

  it('should render with white brandmark', () => {
    const { getByRole } = render(<JesusFilmBrandmark variant="white" />)

    expect(
      getByRole('img', { name: 'jesus-film-brandmark' }).getAttribute('src')
    ).toEqual('white.png')
  })
})
