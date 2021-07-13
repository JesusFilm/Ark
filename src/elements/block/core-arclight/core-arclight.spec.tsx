import React from 'react'
import { render } from '@testing-library/react'
import { BasicCoreArclight } from './core-arclight.composition'

it('should render with the correct text', () => {
  const { getByTestId } = render(<BasicCoreArclight />)
  expect(getByTestId('Arclight').getAttribute('src')).toEqual(
    'http://api.arclight.org/videoPlayerUrl?refId=1_1106-mld-0-0'
  )
})
