import React from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  name: {
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    },
  },
  description: {
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    },
  },
  image: {
    width: 100,
    height: 100,
    fontSize: 30
  },
}));

export type AuthorCardProps = {
  /** author name */
  name: string
  /** author bio */
  description: string;
  /** Background image source url */
  src?: string;
  /** Callback when button is clicked */
  onClick?: () => void;
};

export function AuthorCard({ name, description, src, onClick }: AuthorCardProps) {
  const classes = useStyles();
  const initials = name ? name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase() : "";

  return (
    <div className={classes.root} onClick={() => onClick()}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Avatar alt={name} src={src} className={classes.image} >
            {initials}
          </Avatar>
        </Grid>
        <Grid item md container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h5" color="textSecondary" className={classes.name}>
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.description}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
