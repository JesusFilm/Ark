import React from 'react'
import {
  Button,
  Container,
  Typography,
  Grid,
  Divider,
  makeStyles
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5)
  },
  text: {
    color: theme.palette.primary.main,
    fontWeight: 700
  }
}))

export type ListHeaderProps = {
  /**
   * Title of the list
   */
  title: string
  /** Callback when see all is clicked */
  onSeeAllClick?: () => void
}

export function ListHeader({ title, onSeeAllClick }: ListHeaderProps) {
  const { t } = useTranslation('list-header')
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Grid container justify="space-between" alignItems="flex-end">
        <Grid item>
          <Typography className={classes.text} variant="h4">
            {title}
          </Typography>
        </Grid>
        {onSeeAllClick && (
          <Grid item>
            <Button onClick={onSeeAllClick}>{t('SEE ALL')}</Button>
          </Grid>
        )}
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  )
}
