import React from 'react'
import { render } from '@testing-library/react'
import { Default } from '.'

describe('Default', () => {
  it('should render with the provider name slug', () => {
    const { getByTestId } = render(
      <Default
        attributes={{
          url: 'https://youtu.be/UGFCbmvk0vo',
          providerNameSlug: ''
        }}
      />
    )
    expect(getByTestId('')).toBeInTheDocument()
  })
})
