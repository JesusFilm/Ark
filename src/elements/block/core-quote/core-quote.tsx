import React from 'react'
import {
  Box,
  Container,
  Typography,
  Divider,
  makeStyles
} from '@material-ui/core'
import classNames from 'classnames'
import { JesusFilmSymbol } from '@jesus-film/ark.elements.jesus-film-symbol'

const useStyles = makeStyles((theme) => ({
  divider: {
    width: '45%',
    position: 'absolute',
    background: theme.palette.common.black
  },
  leftDivider: {
    left: '0',
    marginTop: theme.spacing(0.7)
  },
  rightDivider: {
    right: '0',
    marginTop: theme.spacing(-1.3)
  },
  imageHeight: {
    height: '15px',
    width: '20px',
    position: 'relative',
    right: '50%',
    left: '50%'
  },
  box: {
    position: 'relative'
  },
  container: {
    padding: '30px 0'
  }
}))

type Attributes = {
  /** */
  value: string
  citation: string
}

export type CoreQuoteProps = {
  /**
   * container for quote attributes
   */
  attributes: Attributes
  /** Variant Style */
  name: 'core/quote'
}

export function CoreQuote({ attributes, name }: CoreQuoteProps) {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Divider className={classNames(classes.divider, classes.leftDivider)} />
      <Container maxWidth="sm">
        <JesusFilmSymbol className={classes.imageHeight} />
        <Container maxWidth="sm" className={classes.container}>
          <Typography
            data-testid={name}
            dangerouslySetInnerHTML={{
              __html: attributes.value
            }}
            variant="h5"
          />
          <Typography
            data-testid="citation"
            dangerouslySetInnerHTML={{ __html: attributes.citation }}
            variant="body1"
          />
        </Container>
        <JesusFilmSymbol className={classes.imageHeight} />
      </Container>
      <Divider className={classNames(classes.divider, classes.rightDivider)} />
    </Box>
  )
}
