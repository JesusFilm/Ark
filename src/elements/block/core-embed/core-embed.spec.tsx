import React from 'react'
import { render } from '@testing-library/react'
import { CoreEmbed } from '.'

describe('embed', () => {
  it('should render with the youtube provider name slug', () => {
    const { getByTestId } = render(
      <CoreEmbed
        attributes={{
          url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
          providerNameSlug: 'youtube'
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByTestId('youtube')).toBeInTheDocument()
  })

  it('should render with the vimeo provider name slug', () => {
    const { getByTestId } = render(
      <CoreEmbed
        attributes={{
          url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
          providerNameSlug: 'vimeo'
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByTestId('vimeo')).toBeInTheDocument()
  })

  it('should render with the iframe provider name slug', () => {
    const { getByTestId } = render(
      <CoreEmbed
        attributes={{
          url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
          providerNameSlug: 'embed-handler'
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByTestId('embed-handler')).toBeInTheDocument()
  })

  it('should render with the default provider name slug', () => {
    const { getByTestId } = render(
      <CoreEmbed
        attributes={{
          url: 'https://player.vimeo.com/video/10679287',
          providerNameSlug: 'vim'
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByTestId('vim')).toBeInTheDocument()
  })
})
