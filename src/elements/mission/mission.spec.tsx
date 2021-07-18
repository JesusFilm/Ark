import React from 'react'
import { render } from '@testing-library/react'
import { Mission } from '.'

it('should render with the mission text', () => {
  const { getByText } = render(<Mission />)
  expect(
    getByText(
      "Together, we will share Jesus with 5 billion people by the end of 2025, This is where you can read and share stories of how God's amazing love and power is reaching people thorugh churches, organizations, Bible studies, technology and more."
    )
  ).toBeInTheDocument()
})
