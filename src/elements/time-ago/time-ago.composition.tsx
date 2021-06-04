import React from 'react'
import { TimeAgo } from './time-ago'

const d = new Date()
d.setDate(d.getDate() - 5)

export const BasicTimeAgo = () => <TimeAgo datetime={d} />

export const RuTimeAgo = () => <TimeAgo datetime={d} locale="ru" />
