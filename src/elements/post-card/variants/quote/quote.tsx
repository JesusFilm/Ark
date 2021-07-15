import React, { ReactNode, ReactElement, createElement } from 'react'
import {
  Box,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  quote: {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
    fontWeight: 700
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  grid: {
    marginLeft: -28
  }
}))

export type QuoteProps = {
  /** Post title */
  title: string
  /** Post slug */
  slug?: string
  /** quote from customPostFields  */
  customPostFields: {
    quote: string
  }
  /**
   * Post publishing date.
   */
  date: string
  PostLink?: (props: {
    children: ReactNode
    href: string
    className?: string
  }) => ReactElement
  /** Variant style */
  variant: 'quote'
}
export function Quote({
  title,
  slug,
  customPostFields: { quote },
  date,
  PostLink = (props) => createElement('a', props)
}: QuoteProps) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Divider />
      <Box py={6}>
        <Container maxWidth="md">
          <Grid container spacing={2} data-testid="quoteVariant">
            <Grid xs={12} item>
              <Typography variant="h3" className={classes.quote}>
                {quote}
              </Typography>
            </Grid>
            <Grid
              xs={12}
              item
              container
              direction="row"
              spacing={1}
              className={classes.grid}>
              <Grid item>
                <Typography>&mdash;</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <PostLink href={slug} className={classes.link}>
                    {title}
                  </PostLink>
                </Typography>
                <Typography color="textPrimary">
                  {t('{{date,date}}', { date })}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider />
    </>
  )
}
