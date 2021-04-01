import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Hero, HeroProps } from "./hero";

export const BasicHero = (props: Partial<HeroProps>) => {
  return <Hero title="Welcome to jesusfilm.org" {...props} />;
};

export const HeroWithAction = (props: Partial<HeroProps>) => {
  return (
    <Hero
      src="https://www.jesusfilm.org/content/dam/jesusfilm/homepage/hero/jesus-broadcast-easter.png"
      title="Send People Jesus this Easter"
      subtitle="Help share the hope of Jesus through TV and Radio Broadcasts!"
      action="Give them Jesus"
      onClick={() => alert("button clicked")}
      {...props}
    />
  );
};

export const CustomHero = (props: Partial<HeroProps>) => {
  return (
    <Hero
      src="https://www.vokeapp.com/wp-content/uploads/2020/04/home-hero-e1591128218650.jpg"
      title={
        <Typography variant="h5">
          This generation was made for bold faith; but do they know that?
        </Typography>
      }
      subtitle={
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
