import { createStyles, makeStyles, Typography } from '@material-ui/core'
import React, { ReactNode } from 'react'
import phoneFrame from './assets/phoneFrame.svg'

export type PhoneProps = {
  /** a text to be rendered in the component as the title. */
  title: string
  /** a text to be rendered in the component as the description. */
  description: string
  /** a text to be rendered in the component as the description. */
  backgroundSrc: string
  /** a text to be rendered in the component as the footer. */
  footer: string
  children?: ReactNode
  variant: 'phone'
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

export function Phone ({ title, description, backgroundSrc, children, footer }: PhoneProps) {
  const classes = useStyles()
  return (
    <div className={classes.box} style={ { backgroundImage: `url(${backgroundSrc})` } } >
      <Typography variant="h5" align="center">{title}</Typography>
      <Typography variant="body2" align="center">{description}</Typography>
      {children}
      <img src={phoneFrame} alt='phone frame'/>
      <Typography variant="h4" align="center" color="primary">{footer}</Typography>
    </div>
  )
}
