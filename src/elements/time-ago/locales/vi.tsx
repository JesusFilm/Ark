import React from 'react'
import { register } from 'timeago.js'
import vi from 'timeago.js/lib/lang/vi.js'
import TimeAgo from 'timeago-react'
register('vi', vi)

export type DefaultProps = {
  /** publishedAt */
  publishedAt: Date;
};

export default function Default ({
  publishedAt
}: DefaultProps) {
  return (
    <TimeAgo datetime={publishedAt} locale='vi' />
  )
}
