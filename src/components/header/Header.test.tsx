import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from ".";
import "@testing-library/jest-dom";
import React from "react";

global.ResizeObserver = require("resize-observer-polyfill");

describe("Header component", () => {
  it("renders the mobile menu when the button is clicked", async () => {

    render(<Header />);

    // open the menu
    const menuOpenButton = screen.getByRole("button", { name: /Open menu/i });
    expect(menuOpenButton).toBeInTheDocument();
    await act(() => {
      fireEvent.click(menuOpenButton);
    });

    // check that the menu is open
    const menuCloseButton = screen.getByRole("button", {
      name: /Close menu/i,
    });
    expect(menuCloseButton).toBeInTheDocument();

    // close the menu
    await act(() => {
      fireEvent.click(menuCloseButton);
    });

    // check that the menu is closed
    const queryMenuClosedButton = screen.queryByRole("button", {
      name: /Close menu/i,
    });

    expect(queryMenuClosedButton).toBeNull();
  });

  it("renders the logo and top navigation links", () => {
    render(<Header />);
    const logoLink = screen.getByRole("link", { name: /Sprint Based Store/i });
    expect(logoLink).toBeInTheDocument();
    const signInLink = screen.getByRole("link", { name: /Sign in/i });
    expect(signInLink).toBeInTheDocument();
    const createAccountLink = screen.getByRole("link", {
      name: /Create account/i,
    });
    expect(createAccountLink).toBeInTheDocument();
  });

  it("shows the number of items in the cart", () => {
    render(<Header />);
    const cartLink = screen.getByRole("link", {
      name: /items in cart, view bag/i,
    });
    expect(cartLink).toHaveTextContent("0");
  });
});
