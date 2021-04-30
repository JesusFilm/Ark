import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Container
} from '@material-ui/core'
import { TimeAgo } from '@jesus-film/ark.elements.time-ago'

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%'
  },
  category: {
    textTransform: 'uppercase'
  }
}))

export type DefaultProps = {
  /** post title */
  title: string;
  /** category */
  category: string;
  /** locale */
  locale?: 'ar' | 'be' | 'bg' | 'bn_IN' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en_short' | 'en_US' | 'es' | 'eu' | 'fa' | 'fi' | 'fr' | 'gl' | 'he' | 'hi_IN' | 'hu' | 'id_ID' | 'it' | 'ja' | 'ka' | 'ko' | 'ml' | 'my' | 'nb_NO' | 'nl' | 'nn_NO' | 'oc' | 'pl' | 'pt_BR' | 'ro' | 'ru' | 'sq' | 'sr' | 'sv' | 'ta' | 'th' | 'tk' | 'tr' | 'uk' | 'vi' | 'zh_CN' | 'zh_TW'
  /** publishedAt */
  publishedAt: Date;
  /** post excerpt */
  excerpt?: string;
  /** Image source url */
  src?: string;
  /** Variant Style */
  style: 'default'
};

export function Default ({
  title,
  excerpt,
  category,
  publishedAt,
  src,
  locale = 'en_US'
}: DefaultProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
      >
        <Grid item>
          <img src={src} className={classes.image} />
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.category}>{category}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{excerpt}</Typography>
        </Grid>
        <Grid item>
          <TimeAgo publishedAt={publishedAt} locale={locale} />
        </Grid>
      </Grid>
    </Container>
  )
}
