import React from 'react'
import { render } from '@testing-library/react'
import { Vimeo } from '.'

it('should render the embeded video', () => {
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
