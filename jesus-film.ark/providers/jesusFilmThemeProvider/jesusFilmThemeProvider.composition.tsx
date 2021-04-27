import { Box } from "@material-ui/core";
import React from "react";
import { HeroWithAction } from "../../elements/hero/hero.composition";
import { JesusFilmThemeProvider } from "./jesusFilmThemeProvider";

export const Hero = () => {
  return (
    <JesusFilmThemeProvider>
      <HeroWithAction />
    </JesusFilmThemeProvider>
  );
};
