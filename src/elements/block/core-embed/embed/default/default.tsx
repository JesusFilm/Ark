import React from 'react'
import { Card, CardContent, Container, Typography } from '@material-ui/core'

type Attributes = {
  url: string
  providerNameSlug: string
}

export type DefaultProps = {
  attributes: Attributes
}

export function Default({ attributes }: DefaultProps) {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h6" component="h2">
            This embed type is currently unsupported.
          </Typography>
          <Typography color="textSecondary">
            {attributes.providerNameSlug}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
