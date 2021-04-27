import React from "react";
import { render } from "@testing-library/react";
import { MinimalAuthorCard } from "./authorCard.composition";

describe("AuthorCard", () => {
  it("should render with the correct text", () => {
    const { getByText } = render(<MinimalAuthorCard />);
    const rendered = getByText("Tez Brooks");
    expect(rendered).toBeTruthy();
  });
});
