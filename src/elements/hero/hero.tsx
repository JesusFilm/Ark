import React, { ReactNode } from 'react'
import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'

export type HeroProps = {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  /** Background image source url */
  src?: string;
  /** Text for button (if onClick not present button will not be displayed, if a reactNode is provided, onClick will be ignored) */
  action?: string | ReactNode;
  /** Callback when button is clicked (if action not present button will not be displayed) */
  onClick?: () => void;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    background: {
      backgroundColor: theme.palette.primary.main,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      color: theme.palette.primary.contrastText
    },
    box: {
      background: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))',
      padding: theme.spacing(2)
    },
    grid: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: 550
    }
  })
)

export const Hero = ({ src, title, subtitle, action, onClick }: HeroProps) => {
  const classes = useStyles()
  return (
    <Box
      className={classes.background}
      style={src && { backgroundImage: `url(${src})` }}
    >
      <Box className={classes.box}>
        <Container maxWidth="sm">
          <Grid container spacing={2} className={classes.grid}>
            <Grid item>
              {typeof title === 'string'
                ? (
                <Typography variant="h2">{title}</Typography>
                  )
                : (
                    title
                  )}
            </Grid>
            {subtitle && (
              <Grid item>
                {typeof subtitle === 'string'
                  ? (
                  <Typography variant="h5" gutterBottom>
                    {subtitle}
                  </Typography>
                    )
                  : (
                      subtitle
                    )}
              </Grid>
            )}
            {action && (typeof action !== 'string' || onClick) && (
              <Grid item>
                {typeof action === 'string'
                  ? (
                  <Button
                    onClick={() => onClick()}
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    {action}
                  </Button>
                    )
                  : (
                      action
                    )}
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
