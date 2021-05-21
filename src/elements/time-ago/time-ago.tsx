import React from 'react'
import { formatDistance } from 'date-fns'
import { eo, enUS, enGB, ru } from 'date-fns/locale'
const locales = { enUS, enGB, eo, ru }

export type TimeAgoProps = {
  /** locale */
  locale?: 'enUS' | 'enGB' | 'eo' | 'ru'
  /** datetime */
  datetime: Date;
};

export function TimeAgo ({
  datetime,
  locale = 'enUS'
}: TimeAgoProps) {
  return (
    <span>{
      formatDistance(datetime, new Date(), { addSuffix: true, locale: locales[locale] })
    }</span>
  )
}
