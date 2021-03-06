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
  value?: string
  citation?: string
}

export type CoreQuoteProps = {
  /**
   * container for quote attributes
   */
  attributes: Attributes
  __typename: 'CoreQuoteBlock'
}

export function CoreQuote({ attributes: { value, citation } }: CoreQuoteProps) {
  const classes = useStyles()

  return value || citation ? (
    <Box className={classes.box}>
      <Divider className={classNames(classes.divider, classes.leftDivider)} />
      <Container maxWidth="sm">
        <JesusFilmSymbol className={classes.imageHeight} />
        <Container maxWidth="sm" className={classes.container}>
          <Typography
            data-testid="CoreQuoteBlock"
            dangerouslySetInnerHTML={{
              __html: value
            }}
            variant="h5"
            gutterBottom
          />
          <Typography
            data-testid="citation"
            dangerouslySetInnerHTML={{ __html: citation }}
            variant="body1"
          />
        </Container>
        <JesusFilmSymbol className={classes.imageHeight} />
      </Container>
      <Divider className={classNames(classes.divider, classes.rightDivider)} />
    </Box>
  ) : null
}
