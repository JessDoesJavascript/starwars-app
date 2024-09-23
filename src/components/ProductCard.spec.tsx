import { expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ProductCard } from "./ProductCard";
import { singleStarship } from "../../testing/mockFiles";
import { act } from "react";
import userEvent from "@testing-library/user-event";

describe("Product card tests", () => {
  const mockAddToCart = vi.fn();
  it("Renders correctly", () => {
    render(
      <ProductCard starship={singleStarship} addToCartFn={mockAddToCart} />
    );
    const name = screen.getByText("Millennium Falcon");
    const model = screen.getByText("YT-1300 light freighter");
    const crewNumber = screen.getByText("4");
    const hyperdrive = screen.getByText("0.5");
    const cost = screen.getByText("100000");
    expect(name).toBeVisible();
    expect(model).toBeVisible();
    expect(crewNumber).toBeVisible();
    expect(hyperdrive).toBeVisible();
    expect(cost).toBeVisible();
  });
  it("Clicking plus button increases number in counter", async () => {
    const user = userEvent.setup({ skipHover: true });
    render(
      <ProductCard starship={singleStarship} addToCartFn={mockAddToCart} />
    );
    const plus = screen.getByTestId("plus-button");
    await act(async () => {
      await user.click(plus);
    });

    const numberDisplay = screen.getByTestId("number-of-items");
    expect(numberDisplay.textContent).toBe("2");
  });
  it("Clicking minus button decreases number in counter", async () => {
    const user = userEvent.setup({ skipHover: true });
    render(
      <ProductCard starship={singleStarship} addToCartFn={mockAddToCart} />
    );
    const minus = screen.getByTestId("minus-button");
    await act(async () => {
      await user.click(minus);
    });

    const numberDisplay = screen.getByTestId("number-of-items");
    expect(numberDisplay.textContent).toBe("0");
  });
  it("Clicking add to cart calls function with message containing number and ship name", async () => {
    const user = userEvent.setup({ skipHover: true });
    render(
      <ProductCard starship={singleStarship} addToCartFn={mockAddToCart} />
    );
    const plus = screen.getByTestId("plus-button");
    await act(async () => {
      await user.click(plus);
    });

    const addToCart = screen.getByText("Buy");
    await user.click(addToCart);
    expect(mockAddToCart).toHaveBeenCalledWith(
      "Added 2 Millennium Falcon(s) to cart"
    );
  });
});
