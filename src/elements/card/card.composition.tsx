import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Card, CardProps } from "./card";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
export const BasicCard = (props: Partial<CardProps>) => {
  return <Card title="Welcome to jesusfilm.org" {...props} />;
};

export const CardGrid = (props: Partial<CardProps>) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={4}>
        <Card
          src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/5-tips-people-struggling-with-doubt/_jcr_content/content/image.img.jpg/1617625007058.jpg"
          subtitle="1 Day Ago  · Following Jesus"
          title="5 Tips for People Struggling with Doubt"
          content="Faith isn't the same thing as certainty. It's the belief we carry despite our lack of total clarity. Unfortunately, that lack of ..."
          authorName="Jesus Film Project"
          authorSrc="https://www.jesusfilm.org/content/dam/jesusfilm/avatars/avatar-jfp.png"
          {...props}
        />
      </Grid>
      <Grid item md={4}>
        <Card
          src="https://www.jesusfilm.org/content/dam/jesusfilm/blog-stories/5-tips-when-losing-hope.jpg"
          title="5 Tips for When You're Losing Hope"
          subtitle="8 Days Ago  · Following Jesus"
          content="Every one of us goes through moments when we just want to give up. That might mean walking away from a difficult ..."
          authorName="Jesus Film Project"
          authorSrc="https://www.jesusfilm.org/content/dam/jesusfilm/avatars/avatar-jfp.png"
          {...props}
        />
      </Grid>
      <Grid item md={4}>
        <Card
          src="https://www.jesusfilm.org/content/dam/jesusfilm/blog-stories/reflections-easter-story-conversation-elizabeth-schenkel.jpg"
          title="Reflections on the Easter Story: A Conversation with Elizabeth Schenkel"
          subtitle="10 Days Ago  · Following Jesus"
          content="I love to tell the story, Twill be my theme in glory, To tell the old, old, story, Of Jesus and His ..."
          authorName="Holly Newell"
          authorSrc="https://www.jesusfilm.org/content/dam/jesusfilm/holly-newell.jpeg"
          {...props}
        />
      </Grid>
      <Grid item md={3}>
        <Card
          src="https://www.jesusfilm.org/content/jf/us/en/_jcr_content/parsys/section_1721352594/content/card.img.jpg/1461606270423.jpg"
          content="Jesus-centric videos in 1,800+ languages"
          action="Browse Films"
          ButtonProps={{ endIcon: <ArrowRightAltIcon /> }}
          {...props}
        />
      </Grid>
      <Grid item md={3}>
        <Card
          src="https://www.jesusfilm.org/content/jf/us/en/_jcr_content/parsys/section_1721352594/content/card_copy.img.jpg/1461606274279.jpg"
          content="Strategies and resources for sharing Jesus"
          action="Get Equipped"
          ButtonProps={{ endIcon: <ArrowRightAltIcon /> }}
          {...props}
        />
      </Grid>
      <Grid item md={3}>
        <Card
          src="https://www.jesusfilm.org/content/jf/us/en/_jcr_content/parsys/section_1721352594/content/card_copy_1222928413.img.jpg/1461606271381.jpg"
          content="Discover who we are and what we do"
          action="Learn More"
          ButtonProps={{ endIcon: <ArrowRightAltIcon /> }}
          {...props}
        />
      </Grid>
      <Grid item md={3}>
        <Card
          src="https://www.jesusfilm.org/content/jf/us/en/_jcr_content/parsys/section_1721352594/content/card_copy_1106347089.img.jpg/1461606276005.jpg"
          content="Become a donor or ministry partner"
          action="Support"
          ButtonProps={{ endIcon: <ArrowRightAltIcon /> }}
          {...props}
        />
      </Grid>
    </Grid>
  );
};

export const CardWithAction = (props: Partial<CardProps>) => {
  return (
    <Card
      src="https://www.jesusfilm.org/content/jf/us/en/blog-and-stories/5-tips-people-struggling-with-doubt/_jcr_content/content/image.img.jpg/1617625007058.jpg"
      title="5 Tips for People Struggling with Doubt"
      content="Faith isn't the same thing as certainty. It's the belief we carry despite our lack of total clarity. Unfortunately, that lack of ..."
      action="Give them Jesus"
      onClick={() => alert("button clicked")}
      authorName="Jesus Film Project"
      authorSrc="https://www.jesusfilm.org/content/dam/jesusfilm/avatars/avatar-jfp.png"
      {...props}
    />
  );
};

export const CustomCard = (props: Partial<CardProps>) => {
  return (
    <Card
      src="https://www.vokeapp.com/wp-content/uploads/2020/04/home-Card-e1591128218650.jpg"
      title="This generation was made for bold faith; but do they know that?"
      content={
        <Typography variant="body1">
          Voke helps this generation discover clarity, conviction and confidence
          in their faith by giving them a reimagined space for better
          conversation and deeper community.
        </Typography>
      }
      action={
        <Button
          variant="outlined"
          color="secondary"
          onClick={props.onClick || (() => alert("button clicked"))}
        >
          Download the Free Voke App
        </Button>
      }
      {...props}
    />
  );
};
