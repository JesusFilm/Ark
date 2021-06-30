import React from 'react'
import {
  Box,
  Container,
  MuiThemeProvider,
  createMuiTheme,
  Typography
} from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    h6: {
      fontWeight: 600
    }
  }
})

export type PostCoreHeadingProps = {
  /**
   * a core heading to be rendered in the component.
   */
  blocks: {
    __typename: 'CoreHeadingBlock'
    attributes: {
      content: string
    }
  }
}

export function PostCoreHeading({ blocks }: PostCoreHeadingProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Box>
        <Container maxWidth="sm">
          <Typography variant="h6">{blocks.attributes.content}</Typography>
        </Container>
      </Box>
    </MuiThemeProvider>
  )
}
