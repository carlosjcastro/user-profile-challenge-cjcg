import React from "react";
import { render, screen } from "@testing-library/react";
import Languages from "./Languages";

describe("Languages Component", () => {
  test("renders the component", () => {
    render(<Languages />);

    const titleElement = screen.getByText(/Idiomas/i);
    expect(titleElement).toBeInTheDocument();

    const spanishElement = screen.getByText(/Español - Nativo/i);
    const englishElement = screen.getByText(/Inglés - B1\+\/B2/i);
    expect(spanishElement).toBeInTheDocument();
    expect(englishElement).toBeInTheDocument();
  });

  test("renders the progress bars", () => {
    render(<Languages />);

    const progressBars = screen.getAllByRole("progressbar");
    expect(progressBars.length).toBe(2);

    expect(progressBars[0]).toHaveAttribute("aria-valuenow", "100");
    expect(progressBars[1]).toHaveAttribute("aria-valuenow", "70");
  });
});
