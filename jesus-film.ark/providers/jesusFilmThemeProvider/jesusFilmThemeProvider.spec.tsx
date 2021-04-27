import React from "react";
import { render } from "@testing-library/react";
import { BasicJesusFilmThemeProvider } from "./jesusFilmThemeProvider.composition";

describe("jesusFilmThemeProvider", () => {
  it("should render the component", () => {
    const { getByText } = render(<BasicJesusFilmThemeProvider />);
    expect(getByText("hello from JesusFilmThemeProvider")).toBeDefined();
  });
});
