import React from 'react'
import { render } from '@testing-library/react'
import { Youtube } from '.'

it('should render with the provider name slug', () => {
  const { getByTestId } = render(
    <Youtube
      attributes={{
        url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
        providerNameSlug: 'youtube'
      }}
    />
  )

  expect(getByTestId('youtube').getAttribute('src')).toEqual(
    'https://www.youtube.com/embed/UGFCbmvk0vo'
  )
})