import React, { createElement, ReactElement } from 'react'
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
  Link?: (
    props: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => ReactElement
}

export function ListHeader({
  title,
  Link = (props) => createElement('a', props)
}: ListHeaderProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body2" className={classes.seeAll}>
            <Link>SEE ALL</Link>
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  )
}
