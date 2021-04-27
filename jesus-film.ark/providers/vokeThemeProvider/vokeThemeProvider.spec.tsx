import React from "react";
import { render } from "@testing-library/react";
import { VokeThemeProvider } from "./vokeThemeProvider.composition";

describe("VokeThemeProvider", () => {
  it("should render the component", () => {
    const { getByText } = render(
      <VokeThemeProvider>hello from VokeThemeProvider</VokeThemeProvider>
    );
    expect(getByText("hello from VokeThemeProvider")).toBeDefined();
  });
});
