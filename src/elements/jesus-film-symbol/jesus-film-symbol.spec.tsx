import React from 'react'
import { render } from '@testing-library/react'
import { JesusFilmSymbol } from './jesus-film-symbol'

describe('jesus-film-symbol', () => {
  it('should render with red symbol by default', () => {
    const { getByRole } = render(<JesusFilmSymbol />)

    expect(getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')).toEqual('red.png')
  })

  it('should render with red symbol', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="red" />)

    expect(getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')).toEqual('red.png')
  })

  it('should render with cool-gray symbol', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="cool-gray" />)

    expect(getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')).toEqual('cool-gray.png')
  })

  it('should render with warm-white symbol', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="warm-white" />)

    expect(getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')).toEqual('warm-white.png')
  })

  it('should render with white symbol', () => {
    const { getByRole } = render(<JesusFilmSymbol variant="white" />)

    expect(getByRole('img', { name: 'jesus-film-symbol' }).getAttribute('src')).toEqual('white.png')
  })
})
