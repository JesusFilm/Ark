import React from 'react'
import { render } from '@testing-library/react'
import { Error } from '.'

describe('Error', () => {
  it('should render with the provider name slug', () => {
    const { getByTestId } = render(
      <Error
        attributes={{
          providerNameSlug: 'vim'
        }}
        title="youtube"
        subtitle="https://www.youtube.com/embed/undefined"
      />
    )
    expect(getByTestId('vim')).toBeInTheDocument()
  })
})
