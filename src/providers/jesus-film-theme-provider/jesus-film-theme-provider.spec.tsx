import React from 'react'
import { render } from '@testing-library/react'
import { JesusFilmThemeProvider } from '.'

describe('jesus-film-theme-provider', () => {
  it('should render the component', () => {
    const { getByText } = render(
      <JesusFilmThemeProvider>
        hello from JesusFilmThemeProvider
      </JesusFilmThemeProvider>
    )
    expect(getByText('hello from JesusFilmThemeProvider')).toBeDefined()
  })
})
