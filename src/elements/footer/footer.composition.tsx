import React from 'react'
import { Footer } from './footer'

export const BasicFooter = () => (
  <Footer
    menus={[
      {
        id: 'sections',
        name: 'Sections',
        menuItems: {
          nodes: [
            { id: 'watch', label: 'Watch' },
            {
              id: 'strategies',
              label: 'Strategies',
              parentId: 'strategies-and-tools'
            },
            {
              id: 'resources',
              label: 'Resources',
              parentId: 'strategies-and-tools'
            },
            {
              id: 'go',
              label: 'Go',
              parentId: 'strategies-and-tools'
            },
            {
              id: 'store',
              label: 'Store',
              parentId: 'strategies-and-tools'
            },
            { id: 'strategies-and-tools', label: 'Strategies and Tools' },
            { id: 'blog', label: 'Blog' },
            { id: 'how-to-help', label: 'How to Help' }
          ]
        }
      },
      {
        id: 'apps',
        name: 'Apps',
        menuItems: {
          nodes: [
            { id: 'android', label: 'Android' },
            { id: 'iphone', label: 'iPhone' }
          ]
        }
      },
      {
        id: 'social',
        name: 'Social',
        menuItems: {
          nodes: [
            { id: 'Facebook', label: 'Facebook' },
            { id: 'Twitter', label: 'Twitter' },
            { id: 'Instagram', label: 'Instagram' },
            { id: 'YouTube', label: 'YouTube' }
          ]
        }
      }
    ]}
  />
)

export const EmptyFooter = () => <Footer />
