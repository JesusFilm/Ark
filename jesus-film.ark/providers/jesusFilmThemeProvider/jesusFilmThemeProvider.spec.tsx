import React from "react";
import { render } from "@testing-library/react";
import { JesusFilmThemeProvider } from "./jesusFilmThemeProvider";

describe("jesusFilmThemeProvider", () => {
  it("should render the component", () => {
    const { getByText } = render(
      <JesusFilmThemeProvider>
        hello from JesusFilmThemeProvider
      </JesusFilmThemeProvider>
    );
    expect(getByText("hello from JesusFilmThemeProvider")).toBeDefined();
  });
});
