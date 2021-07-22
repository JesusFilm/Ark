import React from 'react'
import { render } from '@testing-library/react'
import { CoreArclight } from '.'

it('should render the Arclight video', () => {
  const { getByTestId } = render(
    <CoreArclight
      __typename="LazyblockArclightBlock"
      attributes={{
        refId: '1_1106-mld-0-0'
      }}
    />
  )
  expect(getByTestId('Arclight').getAttribute('src')).toEqual(
    'http://api.arclight.org/videoPlayerUrl?refId=1_1106-mld-0-0'
  )
})

it('should render null', () => {
  const { container } = render(
    <CoreArclight __typename="LazyblockArclightBlock" attributes={{}} />
  )
  expect(container).toBeEmptyDOMElement()
})
