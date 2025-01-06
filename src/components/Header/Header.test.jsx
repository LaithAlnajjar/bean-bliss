import { it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

it("renders correct heading", () => {
  render(
    <MemoryRouter>
      {/* This componenet is needed as the Header contains Link Component which need to be inside a router to work */}
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByRole("heading").textContent).toMatch(/Bean Bliss/i);
});

it("renders navigation links", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getByRole("navigation")).toHaveTextContent("Home");
  expect(screen.getByRole("navigation")).toHaveTextContent("Shop");
});

it("cart button should call the setCartOpen Function", async () => {
  const setCartOpen = vi.fn(); //Mock the setCartOpen Function using vitest
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Header setCartOpen={setCartOpen} />{" "}
      {/* Passes the mocked function as a prop*/}
    </MemoryRouter>
  );
  const button = screen.getByRole("button");

  await user.click(button); //Simulates a user clicking the button

  expect(setCartOpen).toHaveBeenCalled(); //Ensures the mocked function from the props was called when the button was clicked.
});
