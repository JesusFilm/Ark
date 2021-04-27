import { Box } from "@material-ui/core";
import React from "react";
import { CardGrid } from "../../elements/card/card.composition";
import { HeroWithAction } from "../../elements/hero/hero.composition";
import { VokeThemeProvider } from "./vokeThemeProvider";

export const Hero = () => {
  return (
    <VokeThemeProvider>
      <HeroWithAction />
    </VokeThemeProvider>
  );
};
export const Card = () => {
  return (
    <VokeThemeProvider>
      <Box m={2}>
        <CardGrid />
      </Box>
    </VokeThemeProvider>
  );
};
