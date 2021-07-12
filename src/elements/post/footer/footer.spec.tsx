import React from 'react'
import { render } from '@testing-library/react'
import { BasicPostFooter } from './footer.composition'

describe('post-footer', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicPostFooter />)
    expect(
      getByText(
        "On staff with Cru as trailblazer for truth, Josh has been at the forefront of cultural trends and ground-breaking ministry for over five decades. Josh McDowell shares the essentials of the Christian faith in everyday language so youth, families, churches, leaders and individuals of all ages are prepared for the life of faith. Since 1961, Josh has delivered talks in 126 countries. He has written or co-authored 151 books, including More Than a Carpenter and Evidence That Demands a Verdict, one of the twentieth century's top 40 books. Josh and his wife, Dottie have been married 48 years, have four wonderful children and 10 beloved grandchildren."
      )
    ).toBeInTheDocument()
  })
  it('should render with the correct slug', () => {
    const { getByTestId } = render(<BasicPostFooter />)
    expect(getByTestId('user')).toBeInTheDocument()
  })
})
