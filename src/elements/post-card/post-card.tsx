import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Button,
  Container
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    color: theme.palette.primary.contrastText
  },
  heroDarken: {
    background: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))',
    width: '100%',
    minHeight: '80vh',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8)
  },
  image: {
    maxWidth: '100%'
  },
  smallItem: {
    maxWidth: theme.spacing(8),
    flexGrow: 0
  },
  author: {
    textTransform: 'uppercase'
  },
  quote: {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
    '&::before': {
      content: 'open-quote',
      fontSize: '2em',
      fontStyle: 'italic'
    }
  },
  category: {
    textTransform: 'uppercase'
  }
}))

export type HeroProps = {
  /** post title */
  title: string;
  /** post category */
  category?: string;
  /** post excerpt */
  excerpt?: string;
  /** Image source url */
  src?: string;
  /** Callback when button is clicked */
  onClick?: () => void;
};

function Hero ({
  title,
  category,
  excerpt,
  src,
  onClick
}: HeroProps) {
  const classes = useStyles()

  return (
    <Box
      className={src ? classes.heroBackground : ''}
      style={src ? { backgroundImage: `url(${src})` } : {}}
    >
      <Box className={src ? classes.heroDarken : ''}>
        <Container maxWidth="sm">
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h5">{category}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h2">{title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{excerpt}</Typography>
            </Grid>
            {onClick && (
              <Grid item>
                <Button
                  onClick={() => onClick()}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Read Story
                </Button>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export type PremiereProps = {
  /** post title */
  title: string;
  /** post excerpt */
  excerpt?: string;
  /** Image source url */
  src?: string;
};

function Premiere ({
  title,
  excerpt,
  src
}: PremiereProps) {
  const classes = useStyles()

  return (
    <Container maxWidth="xs">
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Grid item>
          <img src={src} className={classes.image} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" align="center">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center">{excerpt}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export type ItemProps = {
  /** post title */
  title: string;
  /** author name */
  author?: string;
  /** Image source url */
  src?: string;
};

function Item ({
  title,
  author,
  src
}: ItemProps) {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
      >
        {src &&
          (<Grid item sm={3} xs={3} md={3}>
              <img src={src} className={classes.image} />
          </Grid>)
        }
        <Grid
          item
          xs={src ? 9 : 12}
          sm={src ? 9 : 12}
          md={src ? 9 : 12}
          container
          direction="column"
          alignItems="flex-start"
          justify="flex-start"
          spacing={1}
        >
          <Grid item>
            <Typography variant="subtitle1">{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.author}>{author}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  )
}

export type QuoteProps = {
  /** post title */
  title: string;
  /** excerpt  */
  excerpt: string;
  /** published_at string */
  publishedAt: string;
};

function Quote ({
  title,
  excerpt,
  publishedAt
}: QuoteProps) {
  const classes = useStyles()

  return (
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
      >
        <Grid item>
          <Typography variant="h2" className={classes.quote}>{excerpt}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            - {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            {publishedAt}
          </Typography>
        </Grid>
      </Grid>
  )
}

export type DefaultProps = {
  /** post title */
  title: string;
  /** category */
  category: string;
  /** publishedAt */
  publishedAt: string;
  /** post excerpt */
  excerpt?: string;
  /** Image source url */
  src?: string;
};

function Default ({
  title,
  excerpt,
  category,
  publishedAt,
  src
}: DefaultProps) {
  const classes = useStyles()
  return (
    <Container maxWidth="xs">
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        spacing={1}
      >
        <Grid item>
          <img src={src} className={classes.image} />
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.category}>{category}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{excerpt}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{publishedAt}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

type variant = 'hero' | 'premiere' | 'item' | 'card' | 'quote'

export type PostCardProps = {
  /** post title */
  title: string;
  /** post category */
  category?: string;
  /** post excerpt */
  excerpt?: string;
  /** post publishedAt string */
  publishedAt?: string;
  /** Image source url */
  src?: string;
  /** Author name */
  author?: string;
  /** Callback when button is clicked */
  onClick?: () => void;
  /** Style */
  variant?: variant
};

export function PostCard ({
  title,
  category,
  excerpt,
  publishedAt,
  src,
  author,
  onClick,
  variant
}: PostCardProps) {
  const withDefault = variant || 'default'
  return (
    <React.Fragment>
      {
        {
          hero: (<Hero
                    title={title}
                    category={category}
                    excerpt={excerpt}
                    src={src}
                    onClick={onClick} />),
          premiere: (<Premiere
                    title={title}
                    excerpt={excerpt}
                    src={src} />),
          item: (<Item
                    title={title}
                    author={author}
                    src={src} />),
          quote: (<Quote
                    title={title}
                    publishedAt={publishedAt}
                    excerpt={excerpt} />),
          default: (<Default
                    title={title}
                    category={category}
                    publishedAt={publishedAt}
                    src={src}
                    excerpt={excerpt} />)
        }[withDefault]
    }
    </React.Fragment>

  )
}
