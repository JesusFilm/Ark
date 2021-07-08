import React from 'react'
import { render } from '@testing-library/react'
import { Youtube } from '.'

it('should render the embeded video', () => {
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
