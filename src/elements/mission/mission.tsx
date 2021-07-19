import React from 'react'
import { Container, Divider, Typography, makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

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
    color: theme.palette.primary.main
  }
}))

export function Mission() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <>
      <Divider className={classes.firstDivider} variant="middle" />
      <Divider className={classes.secondDivider} variant="middle" />
      <Container>
        <Typography className={classes.textColor} variant="h5" align="center">
          {t(
            "Together, we will share Jesus with 5 billion people by the end of 2025, This is where you can read and share stories of how God's amazing love and power is reaching people thorugh churches, organizations, Bible studies, technology and more."
          )}
        </Typography>
      </Container>
      <Divider className={classes.thirdDivider} variant="middle" />
      <Divider className={classes.fourthDivider} variant="middle" />
    </>
  )
}
