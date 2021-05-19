import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Footer } from '.'

describe('footer', () => {
  it('should render menu with dropdown', async () => {
    const { getByText, queryByText } = render(
      <Footer
        menus={[
          {
            id: 'sections',
            name: 'Sections',
            menuItems: {
              nodes: [
                { id: 'watch', label: 'Watch' },
                {
                  id: 'resources',
                  label: 'Resources',
                  parentId: 'strategies-and-tools'
                },
                { id: 'strategies-and-tools', label: 'Strategies and Tools' },
                { id: 'blog', label: 'Blog' },
                { id: 'how-to-help', label: 'How to Help' }
              ]
            }
          }
        ]}
      />
    )
    expect(getByText('Resources')).toBeTruthy()
    const itemWithNestedList = getByText('Strategies and Tools')
    fireEvent.click(itemWithNestedList)
    await waitFor(() => expect(queryByText('Resources')).toBeFalsy())
    fireEvent.click(itemWithNestedList)
    await waitFor(() => expect(queryByText('Resources')).toBeTruthy())
  })

  it('should render footer without menus', async () => {
    const { getByText } = render(<Footer />)
    expect(
      getByText(`Copyright © 1995-${new Date().getFullYear()}.`)
    ).toBeTruthy()
  })
})
