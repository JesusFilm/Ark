import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Divider,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5)
  },
  seeAll: {
    marginTop: theme.spacing(2),
    cursor: 'pointer'
  }
}))

export type ListHeaderProps = {
  /**
   * Title of the list
   */
  title: string
  onSeeAllClick?: () => void
}

export function ListHeader({ title, onSeeAllClick }: ListHeaderProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          {onSeeAllClick ? (
            <Typography variant="body2" className={classes.seeAll}>
              SEE ALL
            </Typography>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  )
}
