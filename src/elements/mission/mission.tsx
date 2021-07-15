import React from 'react'
import { Container, Divider, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  firstDivider: {
    marginTop: theme.spacing(5)
  },
  secondDivider: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(6)
  },
  thirdDivider: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(0.5)
  },
  fourthDivider: {
    marginBottom: theme.spacing(5)
  },
  textColor: {
    color: '#EF3340'
  }
}))

export type MissionProps = {
  /**
   * Mission text to be rendered on the component
   */
  text: "Together, we will share Jesus with 5 billion people by 2025. This is where you can read and share stories of how God's amazing love and power is reaching people through churches, organizations, Bible studies, technology and more."
}

export function Mission({ text }: MissionProps) {
  const classes = useStyles()
  return (
    <>
      <Divider className={classes.firstDivider} variant="middle" />
      <Divider className={classes.secondDivider} variant="middle" />
      <Container maxWidth="md">
        <Typography className={classes.textColor} variant="h5" align="center">
          {text}
        </Typography>
      </Container>
      <Divider className={classes.thirdDivider} variant="middle" />
      <Divider className={classes.fourthDivider} variant="middle" />
    </>
  )
}
