import React from "react";
import { render } from "@testing-library/react";
import { BasicAuthorList } from "./authorList.composition";

describe("authorList", () => {
  it("should render with the correct text", () => {
    const { getByText } = render(<BasicAuthorList />);
    const rendered = getByText("Tez Brooks");
    expect(rendered).toBeTruthy();
  });
});
