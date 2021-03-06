import React from 'react'
import { render } from '@testing-library/react'
import { CoreParagraph } from '.'

it('should render with the correct text', () => {
  const { getByText } = render(
    <CoreParagraph
      attributes={{
        content:
          "When people talk about the ministry of Jesus, it's easy to focus on his miracles. Jesus performed some amazing feats that the world had never seen (and hasn’t seen since). But one of the most exciting things about His ministry was His teaching style."
      }}
      __typename="CoreParagraphBlock"
    />
  )
  expect(
    getByText(
      `When people talk about the ministry of Jesus, it's easy to focus on his miracles. Jesus performed some amazing feats that the world had never seen (and hasn’t seen since). But one of the most exciting things about His ministry was His teaching style.`
    )
  ).toBeInTheDocument()
})

it('should render null', () => {
  const { container } = render(
    <CoreParagraph __typename="CoreParagraphBlock" attributes={{}} />
  )
  expect(container).toBeEmptyDOMElement()
})
