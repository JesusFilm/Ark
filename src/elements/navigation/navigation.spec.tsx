import '@testing-library/dom'
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navigation } from '.'
import { I18nProvider } from '../../providers/i18n-provider'

let mockTrigger = false
jest.mock('@material-ui/core/useScrollTrigger', () =>
  jest.fn(() => mockTrigger)
)

describe('navigation', () => {
  it('renders menu and be able to be shown then hidden', async () => {
    const { getByRole, getByText, queryByText } = render(
      <I18nProvider>
        <Navigation
          menus={[
            {
              id: 'sections',
              name: 'Sections',
              menuItems: {
                nodes: [{ id: 'watch', label: 'Watch' }]
              }
            }
          ]}
        />
      </I18nProvider>
    )
    userEvent.click(getByRole('button', { name: 'menu' }))
    expect(getByText('Watch')).toBeInTheDocument()
    userEvent.click(getByRole('button', { name: 'close' }))
    await waitFor(() => expect(queryByText('Watch')).not.toBeInTheDocument())
  })

  it('renders donate link', () => {
    const { getByRole } = render(
      <I18nProvider>
        <Navigation />
      </I18nProvider>
    )
    expect(getByRole('link', { name: 'Donate' })).toBeInTheDocument()
  })

  it('does not elevate when not scrolled', () => {
    mockTrigger = false
    const { getByTestId } = render(
      <I18nProvider>
        <Navigation />
      </I18nProvider>
    )
    expect(getByTestId('AppBar')).not.toHaveClass('MuiPaper-elevation4')
  })

  it('elevates when scrolled', () => {
    mockTrigger = true
    const { getByTestId } = render(
      <I18nProvider>
        <Navigation />
      </I18nProvider>
    )
    expect(getByTestId('AppBar')).toHaveClass('MuiPaper-elevation4')
  })
})
