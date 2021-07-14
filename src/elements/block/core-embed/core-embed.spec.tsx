import React from 'react'
import { render } from '@testing-library/react'
import { CoreEmbed } from '.'

describe('embed', () => {
  it('should render with the youtube provider name slug', () => {
    const { getByTestId } = render(
      <CoreEmbed
        attributes={{
          url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
          providerNameSlug: 'youtube',
          align: ''
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
          url: 'https://player.vimeo.com/video/10679287',
          providerNameSlug: 'vimeo',
          align: ''
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
          providerNameSlug: 'embed-handler',
          align: 'wide'
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByTestId('embed-handler')).toBeInTheDocument()
  })

  it('should render with the default provider name slug', () => {
    const { getByText } = render(
      <CoreEmbed
        attributes={{
          url: 'https://player.vimeo.com/video/10679287',
          providerNameSlug: 'vim',
          align: ''
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByText('vim')).toBeInTheDocument()
  })
})
