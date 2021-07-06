import React from 'react'
import { render } from '@testing-library/react'
import { EmbedBlock } from '../../core-embed.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<EmbedBlock />)
  const rendered = getByText('hello from Default')
  expect(rendered).toBeTruthy()
})
