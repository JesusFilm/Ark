import React from 'react'
import { render } from '@testing-library/react'
import { BasicPost } from './post.composition'
import { I18nProvider } from '@jesus-film/ark.providers.i18n-provider'

describe('post-components', () => {
  it('should render text from heading component', () => {
    const { getByText } = render(
      <I18nProvider>
        <BasicPost />
      </I18nProvider>
    )
    expect(getByText('The parables from Matthew')).toBeInTheDocument()
  })

  it('should render text from paragraph', () => {
    const { getByText } = render(<BasicPost />)
    expect(
      getByText(
        "Matthew was particularly focused on convincing the Jews that Jesus was the Messiah. One way that he accomplished that goal was by centering his message around Jesus’ teachings and how they intersected with Jewish faith and tradition. That's why we find so many parables that are unique to Matthew, like The Unmerciful Servant, The Workers in the Vineyard, and The Ten Virgins."
      )
    ).toBeInTheDocument()
  })
})
