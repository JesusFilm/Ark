import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { HeroWithAction, CustomHero } from "./hero.composition";

it("component should render", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<HeroWithAction onClick={handleClick} />);

  expect(getByText("Send People Jesus this Easter")).toBeInTheDocument();
  expect(
    getByText("Help share the hope of Jesus through TV and Radio Broadcasts!")
  ).toBeInTheDocument();
  fireEvent.click(getByText("Give them Jesus"));
  expect(handleClick).toHaveBeenCalled();
});

it("custom component should render", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<CustomHero onClick={handleClick} />);

  expect(
    getByText("This generation was made for bold faith; but do they know that?")
  ).toBeInTheDocument();
  expect(
    getByText(
      "Voke helps this generation discover clarity, conviction and confidence in their faith by giving them a reimagined space for better conversation and deeper community."
    )
  ).toBeInTheDocument();
  fireEvent.click(getByText("Download the Free Voke App"));
  expect(handleClick).toHaveBeenCalled();
});
