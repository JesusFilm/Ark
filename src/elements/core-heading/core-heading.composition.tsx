import React from 'react'
import { CoreHeading } from './core-heading'

export const BasicCoreHeading = () => (
  <CoreHeading
    {...{
      name: 'core/heading',
      attributes: {
        align: '',
        textAlign: '',
        content: 'The parables from Matthew',
        level: 2
      }
    }}
  />
)
