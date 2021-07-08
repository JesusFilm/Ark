import React from 'react'
import { render } from '@testing-library/react'
import { Iframe } from '.'

it('should render the embeded video', () => {
  const { getByTestId } = render(
    <Iframe
      attributes={{
        url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
        providerNameSlug: 'embed-handler'
      }}
    />
  )
  expect(getByTestId('embed-handler').getAttribute('src')).toEqual(
    'https://www.youtube.com/embed/UGFCbmvk0vo'
  )
})
