import React from "react";
import { render } from "@testing-library/react";
import { BasicVokeThemeProvider } from "./vokeThemeProvider.composition";

describe("VokeThemeProvider", () => {
  it("should render the component", () => {
    const { getByText } = render(<BasicVokeThemeProvider />);
    expect(getByText("hello from VokeThemeProvider")).toBeDefined();
  });
});
