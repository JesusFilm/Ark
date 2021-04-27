import { Box } from "@material-ui/core";
import React from "react";
import { HeroWithAction } from "../../elements/hero/hero.composition";
import { VokeThemeProvider } from "./vokeThemeProvider";

export const Hero = () => {
  return (
    <VokeThemeProvider>
      <HeroWithAction />
    </VokeThemeProvider>
  );
};
};
