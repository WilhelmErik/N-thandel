import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductDetail from "./ProductDetail";

describe("The description exists", () => {
  it("has a title that says description", () => {
    //Arange
    render(<ProductDetail />);
    //Act
    const description = screen.getByRole("heading", {
      name: /Description/i,
    });

    //Assert
    expect(description).toBeInTheDocument()
  });
});
