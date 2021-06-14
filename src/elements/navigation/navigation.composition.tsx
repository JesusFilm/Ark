import { JesusFilmThemeProvider } from '@jesus-film/ark.providers.jesus-film-theme-provider'
import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { Navigation } from './navigation'

const Text = () => {
  return (
    <Typography gutterBottom>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
      risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
      purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
      eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
      risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
      purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
      eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
      risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
      purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
      eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
      nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
      risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
      purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
      egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
      eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    </Typography>
  )
}

export const BasicNavigation = () => (
  <JesusFilmThemeProvider>
    <Navigation
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
    <Box m={2}>
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
    </Box>
  </JesusFilmThemeProvider>
)
