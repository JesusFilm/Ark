import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { CompleteHero, CustomHero } from './hero.composition'
import { Hero } from './hero'

describe('hero', () => {
  it('component should render', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<CompleteHero onClick={handleClick} />)

    expect(getByText('Send People Jesus this Easter')).toBeDefined()
    expect(
      getByText('Help share the hope of Jesus through TV and Radio Broadcasts!')
    ).toBeDefined()
    fireEvent.click(getByText('Give them Jesus'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('custom component should render', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<CustomHero onClick={handleClick} />)

    expect(
      getByText(
        'This generation was made for bold faith; but do they know that?'
      )
    ).toBeDefined()
    expect(
      getByText(
        'Voke helps this generation discover clarity, conviction and confidence in their faith by giving them a reimagined space for better conversation and deeper community.'
      )
    ).toBeDefined()
    fireEvent.click(getByText('Download the Free Voke App'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('should have a default background', () => {
    const { getByTestId } = render(<Hero title='abc' />)
    expect(window.getComputedStyle(getByTestId('heroBackground')).backgroundColor).toEqual('rgb(63, 81, 181)')
  })
})
