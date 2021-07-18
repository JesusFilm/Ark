import React from 'react'
import { render } from '@testing-library/react'
import { BasicCoreArclight } from './core-arclight.composition'

it('should render the Arclight video', () => {
  const { getByTestId } = render(<BasicCoreArclight />)
  expect(getByTestId('Arclight').getAttribute('src')).toEqual(
    'http://api.arclight.org/videoPlayerUrl?refId=1_1106-mld-0-0'
  )
})
