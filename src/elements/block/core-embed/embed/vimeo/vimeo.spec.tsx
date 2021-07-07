import React from 'react'
import { render } from '@testing-library/react'
import { Vimeo } from '.'

it('should render with the provider name slug', () => {
  const { getByTestId } = render(
    <Vimeo
      attributes={{
        url: 'https://player.vimeo.com/video/10679287',
        providerNameSlug: 'vimeo'
      }}
    />
  )
  expect(getByTestId('vimeo').getAttribute('src')).toEqual(
    'https://player.vimeo.com/video/10679287'
  )
})
