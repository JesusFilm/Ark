import React from 'react'
import { render } from '@testing-library/react'
import { Error } from '.'

describe('Error', () => {
  it('should render with the wrong url', () => {
    const { getByText } = render(
      <Error
        title="This is not a valid youtube url"
        subtitle="https://www.youtube.come/UGBVbmvk0v0"
      />
    )
    expect(
      getByText('https://www.youtube.come/UGBVbmvk0v0')
    ).toBeInTheDocument()
  })

  it('should render with the error message', () => {
    const { getByText } = render(
      <Error
        title="This is not a valid vimeo url"
        subtitle="https://vimeo.commm/10679287"
      />
    )
    expect(getByText('This is not a valid vimeo url')).toBeInTheDocument()
  })
})
