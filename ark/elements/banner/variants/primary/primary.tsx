import { createStyles, makeStyles, Typography } from '@material-ui/core'
import React, { ReactNode } from 'react'

export type PrimaryProps = {
  /** a text to be rendered in the component as the title. */
  title: string
  /** a text to be rendered in the component as the description. */
  description: string
  /** a text to be rendered in the component as the description. */
  backgroundSrc: string
  /** a text to be rendered in the component as the footer. */
  footer: string
  children?: ReactNode
  variant: 'default'
};

const useStyles = makeStyles((theme) =>
  createStyles({
    box: {
      padding: theme.spacing(4),
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgrounndRepeat: 'no-repeat'
    }
  })
)

export function Primary ({ title, description, backgroundSrc, children, footer }: PrimaryProps) {
  const classes = useStyles()
  return (
    <div className={classes.box} style={ { backgroundImage: `url(${backgroundSrc})` } } >
      <Typography variant="h5" align="center">{title}</Typography>
      <Typography variant="body2" align="center">{description}</Typography>
      {children}
      <Typography variant="h4" align="center" color="primary">{footer}</Typography>
    </div>
  )
}