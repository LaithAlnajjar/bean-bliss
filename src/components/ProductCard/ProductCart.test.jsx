import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard.jsx";

it("renders correct name and price", () => {
  render(<ProductCard name={"Coffee"} price={"19.95"} />);

  expect(screen.getByRole("productName")).toHaveTextContent("Coffee");
  expect(screen.getByRole("productPrice")).toHaveTextContent("19.95");
});
