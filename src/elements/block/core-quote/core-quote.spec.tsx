import React from 'react'
import { render } from '@testing-library/react'
import { CoreQuote } from '.'

it('should render the quote', () => {
  const { getByText } = render(
    <CoreQuote
      {...{
        name: 'core/quote',
        attributes: {
          value:
            '"But the evidence supporting those manuscripts pales in comparison to one of the most recognized and historically reliable works, which is Homer\'s "Iliad." There are more than 1,900 "Iliad" manuscripts in existence, and the earliest manuscript copy dates to 415 BC.1"',
          citation: 'Citation for this quote goes here'
        }
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
      name="core/quote"
      attributes={{
        value:
          '"But the evidence supporting those manuscripts pales in comparison to one of the most recognized and historically reliable works, which is Homer\'s "Iliad." There are more than 1,900 "Iliad" manuscripts in existence, and the earliest manuscript copy dates to 415 BC.1"',
        citation: 'Citation for this quote goes here'
      }}
    />
  )

  expect(getByText('Citation for this quote goes here')).toBeInTheDocument()
})
