import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ProductAttribute } from "./ProductAttribute";

describe("Product attribute tests", () => {
  it("Displays attributes when passed in", () => {
    render(<ProductAttribute attribute="Model" attValue="CR90 corvette" />);
    const name = screen.getByText("Model");
    const value = screen.getByText("CR90 corvette");
    expect(name).toBeVisible();
    expect(value).toBeVisible();
  });
  it("Hides attributes if any are not available", () => {
    render(<ProductAttribute attribute="Model" />);
    const name = screen.queryByText("Model");
    const value = screen.queryByText("CR90 corvette");
    expect(name).toBeNull();
    expect(value).toBeNull();
  });
});
