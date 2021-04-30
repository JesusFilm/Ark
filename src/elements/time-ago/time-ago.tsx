import React from 'react'
import TimeAgoDefault from 'timeago-react'

export type TimeAgoProps = {
  /** locale */
  locale?: 'ar' | 'be' | 'bg' | 'bn_IN' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en_short' | 'en_US' | 'es' | 'eu' | 'fa' | 'fi' | 'fr' | 'gl' | 'he' | 'hi_IN' | 'hu' | 'id_ID' | 'it' | 'ja' | 'ka' | 'ko' | 'ml' | 'my' | 'nb_NO' | 'nl' | 'nn_NO' | 'oc' | 'pl' | 'pt_BR' | 'ro' | 'ru' | 'sq' | 'sr' | 'sv' | 'ta' | 'th' | 'tk' | 'tr' | 'uk' | 'vi' | 'zh_CN' | 'zh_TW'
  /** publishedAt */
  publishedAt: Date;
};

export function TimeAgo ({ publishedAt, locale = 'en_US' }: TimeAgoProps) {
  if (locale === 'en_US') {
    return <TimeAgoDefault datetime={publishedAt} />
  } else {
    const LocalizedTimeAgo = React.lazy(() => import(`./locales/${locale}`))
    return (
      <React.Suspense fallback={<TimeAgoDefault datetime={publishedAt} />}>
        <LocalizedTimeAgo publishedAt={publishedAt} />
      </React.Suspense>
    )
  }
}
