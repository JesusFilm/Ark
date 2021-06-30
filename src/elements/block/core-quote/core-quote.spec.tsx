import React from 'react'
import { render, screen } from '@testing-library/react'
import { CoreQuote } from '.'
import { QuoteBlock } from '../block.composition'

const quote = (
  <CoreQuote
    {...{
      attributes: {
        value:
          'But the evidence supporting those manuscripts pales in comparison to one of the most recognized and historically reliable works, which is Homer\'s "Iliad." There are more than 1,900 "Iliad" manuscripts in existence, and the earliest manuscript copy dates to 415 BC.',
        citation: 'Citation for this quote goes here'
      },
      name: 'core/quote'
    }}
  />
)

describe('quote', () => {
  it('should render the quote', () => {
    const { getByText } = render(quote)
    const quoteRendered = getByText(
      'But the evidence supporting those manuscripts pales in comparison to one of the most recognized and historically reliable works, which is Homer\'s "Iliad." There are more than 1,900 "Iliad" manuscripts in existence, and the earliest manuscript copy dates to 415 BC.'
    )
    expect(quoteRendered).toBeTruthy()
  })
  it('should render the citation', () => {
    render(<QuoteBlock />)
    const citationRendered = screen.getByTestId('citation')
    expect(citationRendered).toBeTruthy()
  })
})
