import React from 'react'
import fetchMock from 'jest-fetch-mock'
fetchMock.enableMocks()

/* eslint-disable import/first */
import { fireEvent, render, waitFor } from '@testing-library/react'
import { BasicI18nProvider } from './i18n-provider.composition'

describe('i18nProvider', () => {
  beforeEach(() => {
    fetchMock.mockIf(/^https:\/\/jesusfilm\.github\.io.*$/, async (req) => {
      if (req.url.endsWith('/Ark/locales/en/translation.json')) {
        return {
          body: JSON.stringify({
            'When people encounter Jesus, everything changes':
              'When people encounter Jesus, everything changes',
            'We want everyone, everywhere to encounter Jesus':
              'We want everyone, everywhere to encounter Jesus'
          })
        }
      }
      if (req.url.endsWith('/Ark/locales/de/translation.json')) {
        return {
          body: JSON.stringify({
            'When people encounter Jesus, everything changes':
              'Wenn Menschen Jesus begegnen, ändert sich alles',
            'We want everyone, everywhere to encounter Jesus':
              'Wir möchten, dass jeder überall Jesus begegnet'
          })
        }
      } else {
        return {
          body: 'Not Found',
          init: {
            status: 404
          }
        }
      }
    })
  })

  it('should render with the correct text', async () => {
    const { getByText, getByRole } = render(<BasicI18nProvider />)
    expect(
      getByText('When people encounter Jesus, everything changes')
    ).toBeInTheDocument()
    fireEvent.click(getByRole('button', { name: 'German' }))
    await waitFor(() =>
      expect(
        getByText('Wenn Menschen Jesus begegnen, ändert sich alles')
      ).toBeInTheDocument()
    )
    fireEvent.click(getByRole('button', { name: 'French' }))
    await waitFor(() =>
      expect(
        getByText('When people encounter Jesus, everything changes')
      ).toBeInTheDocument()
    )
  })
})
