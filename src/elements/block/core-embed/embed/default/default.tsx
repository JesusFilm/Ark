import React from 'react'
import { Card, CardContent, Container, Typography } from '@material-ui/core'

type Attributes = {
  url: string
  providerNameSlug: string
}

export type DefaultProps = {
  /**
   * Container for embed attributes
   */
  attributes: Attributes
  __typename: 'CoreEmbedBlock'
}

export function Default({ attributes }: DefaultProps) {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h6">
            This embed type is currently unsupported.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
