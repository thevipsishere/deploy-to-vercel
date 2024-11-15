import { render } from "@testing-library/react";
import React from "react";

test("renders a test component", () => {
  const { getByText } = render(<div>Test Component</div>);
  expect(getByText("Test Component")).toBeTruthy();
});
