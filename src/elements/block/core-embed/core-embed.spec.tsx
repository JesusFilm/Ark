import React from 'react'
import { render } from '@testing-library/react'
import { Youtube } from './embed/youtube'
import { Vimeo } from './embed/vimeo'
import { Iframe } from './embed/iframe'
import { Default } from './embed/default'

describe('embed', () => {
  it('should render youtube embed videos', () => {
    const { getByTestId } = render(
      <Youtube
        attributes={{
          url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
          providerNameSlug: 'youtube'
        }}
      />
    )
    expect(getByTestId('youtube')).toBeInTheDocument()
  })

  it('should render vimeo embed videos', () => {
    const { getByTestId } = render(
      <Vimeo
        attributes={{
          url: 'https://player.vimeo.com/video/10679287',
          providerNameSlug: 'vimeo'
        }}
      />
    )
    expect(getByTestId('vimeo')).toBeInTheDocument()
  })

  it('should render iframe embed videos', () => {
    const { getByTestId } = render(
      <Iframe
        attributes={{
          url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
          providerNameSlug: 'embed-handler'
        }}
      />
    )
    expect(getByTestId('embed-handler')).toBeInTheDocument()
  })

  it('should render unsupported text', () => {
    const { getByText } = render(
      <Default
        attributes={{
          url: 'https://youtu.be/UGFCbmvk0vo',
          providerNameSlug: ''
        }}
      />
    )
    expect(
      getByText('This embed type is currently unsupported.')
    ).toBeInTheDocument()
  })
})
