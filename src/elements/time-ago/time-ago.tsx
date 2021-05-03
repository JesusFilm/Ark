import React from 'react'
import TimeAgoLibrary from 'timeago-react'
import { register } from 'timeago.js'
import * as locales from 'timeago.js/lib/lang/index.js'
Object.keys(locales).forEach(locale => {
  register(locale, locales[locale])
})

export type TimeAgoProps = {
  /** locale */
  locale?: 'ar' | 'be' | 'bg' | 'bn_IN' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en_short' | 'en_US' | 'es' | 'eu' | 'fa' | 'fi' | 'fr' | 'gl' | 'he' | 'hi_IN' | 'hu' | 'id_ID' | 'it' | 'ja' | 'ka' | 'ko' | 'ml' | 'my' | 'nb_NO' | 'nl' | 'nn_NO' | 'oc' | 'pl' | 'pt_BR' | 'ro' | 'ru' | 'sq' | 'sr' | 'sv' | 'ta' | 'th' | 'tk' | 'tr' | 'uk' | 'vi' | 'zh_CN' | 'zh_TW'
  /** datetime */
  datetime: Date;
};

export function TimeAgo ({
  datetime,
  locale = 'en_US'
}: TimeAgoProps) {
  return (
    <TimeAgoLibrary datetime={datetime} locale={locale} />
  )
}
