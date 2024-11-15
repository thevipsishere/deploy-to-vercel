import React from "react";
import { render } from "@testing-library/react";

test("renders a sample component", () => {
  const { getByText } = render(<div>Sample Component</div>);
  expect(getByText("Sample Component")).toBeTruthy();
});
