import React from 'react'
import { CoreHeading } from './core-heading'

export const BasicCoreHeading = () => (
  <CoreHeading
    {...{
      name: 'core/heading',
      attributes: {
        align: '',
        content: 'The parables from Matthew',
        level: 2
      }
    }}
  />
)

export const LeftCoreHeading = () => (
  <CoreHeading
    {...{
      name: 'core/heading',
      attributes: {
        align: 'left',
        content: 'The parables from Matthew',
        level: 2
      }
    }}
  />
)
