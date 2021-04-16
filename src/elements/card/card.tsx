import React, { ReactNode } from "react";
import {
  Card as MaterialCard,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  createStyles,
  makeStyles,
  Typography,
  Button,
  Avatar,
  CardActionArea,
  ButtonProps,
} from "@material-ui/core";

export type CardProps = {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  content?: string | ReactNode;
  /** Background image source url */
  src?: string;
  /** Text for button (if onClick not present button will not be displayed, if a reactNode is provided, onClick will be ignored) */
  action?: string | ReactNode;
  /** Callback when button is clicked (if action not present button will not be displayed) */
  onClick?: () => void;
  authorSrc?: string;
  authorName?: string;
  ButtonProps?: Partial<ButtonProps>;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    actionArea: {
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "stretch",
    },
    subtitle: {
      fontSize: "0.8rem",
      textTransform: "uppercase",
      color: theme.palette.text.secondary,
    },
  })
);

export const Card = ({
  src,
  title,
  subtitle,
  content,
  action,
  onClick,
  authorSrc,
  authorName,
  ButtonProps,
}: CardProps) => {
  const classes = useStyles();
  return (
    <MaterialCard className={classes.card}>
      <CardActionArea className={classes.actionArea} onClick={onClick}>
        <CardMedia className={classes.media} image={src} />
        <CardContent>
          {subtitle && (
            <Typography
              variant="h6"
              component="h3"
              className={classes.subtitle}
              gutterBottom
            >
              {subtitle}
            </Typography>
          )}
          {title && (
            <Typography variant="h5" component="h2" gutterBottom>
              {title}
            </Typography>
          )}
          {content &&
            (typeof content === "string" ? (
              <Typography variant="body2" component="p">
                {content}
              </Typography>
            ) : (
              content
            ))}
        </CardContent>
      </CardActionArea>
      {(action || authorName) && (
        <CardActions>
          {authorName && (
            <CardHeader
              avatar={<Avatar src={authorSrc}>{authorName[0]}</Avatar>}
              title={authorName}
            />
          )}
          {action && (
            <Button onClick={onClick} {...ButtonProps}>
              {action}
            </Button>
          )}
        </CardActions>
      )}
    </MaterialCard>
  );
};
