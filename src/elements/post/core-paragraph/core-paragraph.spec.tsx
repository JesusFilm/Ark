import React from 'react'
import { render } from '@testing-library/react'
import { CoreParagraph } from './core-paragraph'

it('renders the core paragraph', () => {
  const { getByText } = render(
    <CoreParagraph
      block={{
        __typename: 'CoreParagraphBlock',
        attributes: {
          content: 'custom string'
        }
      }}
    />
  )
  expect(getByText('custom string')).toBeInTheDocument()
})
