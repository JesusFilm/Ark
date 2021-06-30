import React from 'react'
import { render } from '@testing-library/react'
import { JesusFilmThemeProvider } from '.'

describe('core', () => {
  it('should render the component', () => {
    const { getByText } = render(
      <JesusFilmThemeProvider>
        hello from JesusFilmThemeProvider
      </JesusFilmThemeProvider>
    )
    expect(getByText('hello from JesusFilmThemeProvider')).toBeDefined()
  })
})
