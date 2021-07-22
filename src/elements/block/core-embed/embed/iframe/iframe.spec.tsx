import React from 'react'
import { render } from '@testing-library/react'
import { Iframe } from '.'

describe('Iframe', () => {
  it('should render the embeded video', () => {
    const { getByTestId } = render(
      <Iframe
        attributes={{
          url: 'https://www.youtube.com/embed/UGFCbmvk0vo',
          providerNameSlug: 'embed-handler',
          align: ''
        }}
        __typename="CoreEmbedBlock"
      />
    )
    expect(getByTestId('embed-handler').getAttribute('src')).toEqual(
      'https://www.youtube.com/embed/UGFCbmvk0vo'
    )
  })

  it('should render null', () => {
    const { container } = render(
      <Iframe __typename="CoreEmbedBlock" attributes={{}} />
    )
    expect(container).toBeEmptyDOMElement()
  })
})
