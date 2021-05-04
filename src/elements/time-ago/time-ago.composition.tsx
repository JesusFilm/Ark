import React from 'react'
import { TimeAgo } from './time-ago'

const d = new Date()
d.setDate(d.getDate() - 5)

export const BasicTimeAgo = () => (
  <TimeAgo datetime={d} />
)

export const Bn_INTimeAgo = () => (
  <TimeAgo
    datetime={d}
    locale='bn_IN' />
)
