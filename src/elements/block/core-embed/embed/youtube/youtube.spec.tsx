import React from 'react'
import { render } from '@testing-library/react'
import { Youtube } from '.'

describe('Youtube', () => {
  it('should render the embeded video', () => {
    const { getByTestId } = render(
      <Youtube
        attributes={{
          url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
          providerNameSlug: 'youtube',
          align: ''
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByTestId('youtube').getAttribute('src')).toEqual(
      'https://www.youtube.com/embed/UGFCbmvk0vo'
    )
  })

  it('should render the error message', () => {
    const { getByText } = render(
      <Youtube
        attributes={{
          url: 'https://www.youtube.come/UGBVbmvk0v0',
          providerNameSlug: 'youtube',
          align: ''
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByText('This is not a valid youtube url')).toBeInTheDocument()
  })

  it('should render the wrong url link', () => {
    const { getByText } = render(
      <Youtube
        attributes={{
          url: 'https://www.youtube.com/UGBVbmvk0v0',
          providerNameSlug: 'youtube',
          align: ''
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByText('https://www.youtube.com/UGBVbmvk0v0')).toBeInTheDocument()
  })

  it('should render null', () => {
    const { container } = render(
      <Youtube __typename="CoreEmbedBlock" attributes={{}} />
    )
    expect(container).toBeEmptyDOMElement()
  })
})
