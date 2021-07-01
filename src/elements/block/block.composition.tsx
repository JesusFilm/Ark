import React from 'react'
import { Block } from '.'
import { blocks } from './blockData'
import { Container } from '@material-ui/core'

export const Blocks = () => (
  <Container maxWidth="sm">
    {blocks.map((block, index) => (
      <Block key={index} {...block} />
    ))}
  </Container>
)
