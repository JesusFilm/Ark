import React from 'react'
import { render } from '@testing-library/react'
import { CoreEmbed } from '.'

it('should render the embed video', () => {
  const { getByText } = render(
    <CoreEmbed
      attributes={{
        url: 'https://www.youtube.com/watch?v=UGFCbmvk0vo',
        providerNameSlug: 'youtube'
      }}
      __typename="CoreEmbedBlock"
    />
  )
  expect(
    getByText('https://www.youtube.com/watch?v=UGFCbmvk0vo')
  ).toBeInTheDocument()
})
