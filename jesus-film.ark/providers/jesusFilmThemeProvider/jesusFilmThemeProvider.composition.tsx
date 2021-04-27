import { Box } from "@material-ui/core";
import React from "react";
import { CardGrid } from "../../elements/card/card.composition";
import { HeroWithAction } from "../../elements/hero/hero.composition";
import { JesusFilmThemeProvider } from "./jesusFilmThemeProvider";

export const Hero = () => {
  return (
    <JesusFilmThemeProvider>
      <HeroWithAction />
    </JesusFilmThemeProvider>
  );
};
export const Card = () => {
  return (
    <JesusFilmThemeProvider>
      <Box m={2}>
        <CardGrid />
      </Box>
    </JesusFilmThemeProvider>
  );
};
