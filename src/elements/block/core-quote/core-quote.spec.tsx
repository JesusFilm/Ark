import React from 'react'
import { render } from '@testing-library/react'
import { CoreQuote } from '.'

it('should render the quote', () => {
  const { getByText } = render(
    <CoreQuote
      __typename="CoreQuoteBlock"
      attributes={{
        value:
          '"But the evidence supporting those manuscripts pales in comparison to one of the most recognized and historically reliable works, which is Homer\'s "Iliad." There are more than 1,900 "Iliad" manuscripts in existence, and the earliest manuscript copy dates to 415 BC.1"',
        citation: 'Citation for this quote goes here'
      }}
    />
  )
  expect(
    getByText(
      '"But the evidence supporting those manuscripts pales in comparison to one of the most recognized and historically reliable works, which is Homer\'s "Iliad." There are more than 1,900 "Iliad" manuscripts in existence, and the earliest manuscript copy dates to 415 BC.1"'
    )
  ).toBeInTheDocument()
})

it('should render the citation', () => {
  const { getByText } = render(
    <CoreQuote
      __typename="CoreQuoteBlock"
      attributes={{
        value:
          '"Many people spend their lives trying to create a lasting legacy on earth. They want to be remembered when they\'re gone. Yet, what ultimately matters most will not be what others say about your life but what God says."',
        citation: 'Citation for this quote goes here'
      }}
    />
  )

  expect(getByText('Citation for this quote goes here')).toBeInTheDocument()
})

it('should render null', () => {
  const { container } = render(
    <CoreQuote __typename="CoreQuoteBlock" attributes={{}} />
  )
  expect(container).toBeEmptyDOMElement()
})
