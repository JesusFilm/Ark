import React from 'react'
import { render } from '@testing-library/react'
import { CoreList } from '.'

it('should render with the correct text', () => {
  const { getByText } = render(
    <CoreList
      {...{
        name: 'core/list',
        attributes: {
          ordered: true,
          values:
            '<li>Where it is located in Scripture</li><li>Who was present for this teaching</li><li>Why it was given</li><li>What is the key verse</li>'
        }
      }}
    />
  )
  const rendered = getByText('1. Where it is located in Scripture')
  expect(rendered).toBeTruthy()
})

it('should render unordered', () => {
  const { getByText } = render(
    <CoreList
      {...{
        name: 'core/list',
        attributes: {
          ordered: false,
          values:
            '<li>Where it is located in Scripture</li><li>Who was present for this teaching</li><li>Why it was given</li><li>What is the key verse</li>'
        }
      }}
    />
  )
  const rendered = getByText('- Where it is located in Scripture')
  expect(rendered).toBeTruthy()
})
