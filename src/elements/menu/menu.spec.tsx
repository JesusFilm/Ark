import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { Menu } from '.'

describe('menu', () => {
  it('should render menu with dropdown', async () => {
    const { getByText, queryByText } = render(
      <Menu
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
  it('should render menu children without menus', () => {
    const { getByText } = render(<Menu>Hello World</Menu>)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
