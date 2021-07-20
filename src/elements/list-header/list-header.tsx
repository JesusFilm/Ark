import React from 'react'
import {
  Box,
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
  text: {
    color: '#EE3441',
    fontWeight: 700
  },
  seeAll: {
    marginTop: theme.spacing(2),
    cursor: 'pointer',
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
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Grid container spacing={4}>
        <Grid item xs={9}>
          <Typography className={classes.text} variant="h4">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {onSeeAllClick && (
            <Box onClick={() => onSeeAllClick?.()}>
              <Typography variant="body2" className={classes.seeAll}>
                SEE ALL
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  )
}
