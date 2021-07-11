import React from 'react'
import { render } from '@testing-library/react'
import { Error } from '.'

describe('Error', () => {
  it('should render with the provider name slug', () => {
    // test to see if you're getting the link
    const { getByText } = render(
      <Error
        attributes={{
          providerNameSlug: 'vim'
        }}
        title="youtube"
        subtitle="https://www.youtube.com/embed/undefined"
      />
    )
    expect(
      getByText('https://www.youtube.com/embed/undefined')
    ).toBeInTheDocument()
  })
})
