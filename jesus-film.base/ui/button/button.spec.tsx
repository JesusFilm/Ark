import React from "react";
import { render } from "@testing-library/react";
import { expect } from "chai";

import { BasicButton } from "./button.composition";

it("component should render", () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText("click me");

  expect(rendered).to.exist;
});
