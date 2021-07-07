import React from 'react'
import { render } from '@testing-library/react'
import { Default } from '.'

it('should render with the right text', () => {
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
