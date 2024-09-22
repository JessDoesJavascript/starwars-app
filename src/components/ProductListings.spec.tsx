import { expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { starshipArray } from "../../testing/mockFiles";
import { ProductListings } from "./ProductListings";
import userEvent from "@testing-library/user-event";

describe("Product listings tests", () => {
  it("Renders correctly", () => {
    const mockSeeMoreClick = vi.fn();
    render(
      <ProductListings
        starships={starshipArray}
        handleSeeMoreClick={mockSeeMoreClick}
        noMoreStarships={false}
      />
    );

    const numberOfStarships = starshipArray.length;

    const productCards = screen.getAllByTestId("product-card");

    expect(productCards).toHaveLength(numberOfStarships);
  });
  it("Clicking 'See more' calls function from props", async () => {
    const user = userEvent.setup();
    const mockSeeMoreFn = vi.fn();
    render(
      <ProductListings
        starships={starshipArray}
        handleSeeMoreClick={mockSeeMoreFn}
        noMoreStarships={false}
      />
    );

    const seeMore = screen.getByText("See more...");
    await user.click(seeMore);
    expect(mockSeeMoreFn).toHaveBeenCalled();
  });
  it("should hide the See More button when noMoreStarships prop is true", () => {
    const mockSeeMoreClick = vi.fn();
    render(
      <ProductListings
        starships={starshipArray}
        handleSeeMoreClick={mockSeeMoreClick}
        noMoreStarships={true}
      />
    );
    const seeMore = screen.queryByText("See more...");

    expect(seeMore).toBeNull();
  });
});
