import React from 'react'
import { render } from '@testing-library/react'
import { JesusFilmGraphicSeal } from '.'

describe('jesus-film-symbol', () => {
  it('should render with red symbol by default', () => {
    const { getByRole } = render(<JesusFilmGraphicSeal />)

    expect(
      getByRole('img', { name: 'jesus-film-graphic-seal' }).getAttribute('src')
    ).toEqual('red.svg')
  })

  it('should render with red symbol', () => {
    const { getByRole } = render(<JesusFilmGraphicSeal variant="red" />)

    expect(
      getByRole('img', { name: 'jesus-film-graphic-seal' }).getAttribute('src')
    ).toEqual('red.svg')
  })

  it('should render with white symbol', () => {
    const { getByRole } = render(<JesusFilmGraphicSeal variant="white" />)

    expect(
      getByRole('img', { name: 'jesus-film-graphic-seal' }).getAttribute('src')
    ).toEqual('white.svg')
  })
})
