import React from 'react'
import { render } from '@testing-library/react'
import { Vimeo } from '.'

describe('Vimeo', () => {
  it('should render the embeded video', () => {
    const { getByTestId } = render(
      <Vimeo
        attributes={{
          url: 'https://player.vimeo.com/video/10679287',
          providerNameSlug: 'vimeo',
          align: 'wide'
        }}
      />
    )
    expect(getByTestId('vimeo').getAttribute('src')).toEqual(
      'https://player.vimeo.com/video/10679287'
    )
  })

  it('should render the error message', () => {
    const { getByText } = render(
      <Vimeo
        attributes={{
          url: 'https://vimeo.commm/10679287',
          providerNameSlug: 'vimeo',
          align: ''
        }}
      />
    )
    expect(getByText('This is not a valid vimeo url')).toBeInTheDocument()
  })

  it('should render the wrong the url link', () => {
    const { getByText } = render(
      <Vimeo
        attributes={{
          url: 'https://vimeo.commm/10679287',
          providerNameSlug: 'vimeo',
          align: ''
        }}
      />
    )
    expect(getByText('https://vimeo.commm/10679287')).toBeInTheDocument()
  })
})
