import React from 'react'
import { render } from '@testing-library/react'
import { CoreParagraph } from '.'

it('renders the core paragraph', () => {
  const { getByText } = render(
    <CoreParagraph
      blocks={{
        __typename: 'CoreParagraphBlock',
        attributes: {
          content: 'custom strings'
        }
      }}
    />
  )
  expect(getByText('custom strings')).toBeInTheDocument()
})
