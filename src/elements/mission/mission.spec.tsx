import React from 'react'
import { render } from '@testing-library/react'
import { BasicMission } from './mission.composition'

it('should render with the mission text', () => {
  const { getByText } = render(<BasicMission />)
  expect(
    getByText(
      "Together, we will share Jesus with 5 billion people by 2025. This is where you can read and share stories of how God's amazing love and power is reaching people through churches, organizations, Bible studies, technology and more."
    )
  ).toBeInTheDocument()
})
