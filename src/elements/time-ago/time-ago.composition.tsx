import React from 'react'
import { TimeAgo } from './time-ago'

export const EnTimeAgo = () => (
  <TimeAgo
    publishedAt={new Date('2021-04-30T11:30:00.000+02:00')}
    locale='en_US' />
)

// export const ViTimeAgo = () => (
//   <TimeAgo
//     publishedAt={new Date('2021-04-30T11:30:00.000+02:00')}
//     locale='vi' />
// )
