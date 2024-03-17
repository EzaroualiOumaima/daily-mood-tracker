import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DailyMood from "./DailyMood";

describe("Test DailyMood component", () => {
  screen.debug();
  it("render h1 element", () => {
    render(<DailyMood setIsClicked={() => {}} />);
    const header = screen.getByTestId("moods-header");
    expect(header).toBeInTheDocument();
  });
  it("renders the container", () => {
    render(<DailyMood setIsClicked={() => {}} />);
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });
  it("renders all mood cards", () => {
    const { getByAltText } = render(<DailyMood setIsClicked={() => {}} />);
    expect(getByAltText("happy expression")).toBeInTheDocument();
    expect(getByAltText("amorous expression")).toBeInTheDocument();
    expect(getByAltText("shy expression")).toBeInTheDocument();
    expect(getByAltText("sick expression")).toBeInTheDocument();
    expect(getByAltText("sad expression")).toBeInTheDocument();
    expect(getByAltText("angry expression")).toBeInTheDocument();
    expect(getByAltText("sleepy expression")).toBeInTheDocument();
    expect(getByAltText("afraid expression")).toBeInTheDocument();
  });
  it("renders 8 Mood Components", () => {
    render(<DailyMood setIsClicked={() => {}} />);

    const moodsContainer = screen.getByTestId("container");

    expect(moodsContainer.childNodes.length).toBe(8);
  });

  it("calls setIsClicked when a mood card is clicked", () => {
    const mockSetIsClicked = vi.fn();
    const { getByAltText } = render(
      <DailyMood setIsClicked={mockSetIsClicked} />
    );
    fireEvent.click(getByAltText("happy expression"));
    expect(mockSetIsClicked).toHaveBeenCalledWith(true);
  });
});
