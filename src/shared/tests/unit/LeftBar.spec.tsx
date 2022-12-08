import { LeftBar } from "@/components";
import { FILTER_OPTIONS } from "@/shared/contants";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "../render";

describe("LeftBar Component Test", () => {
  it("should be able to render correctly", () => {
    renderWithRedux(<LeftBar />);

    expect(screen.getByTestId("leftBarTest")).toBeInTheDocument();
    expect(screen.getAllByTestId("checkboxTest")).toHaveLength(
      FILTER_OPTIONS.length
    );
    expect(screen.getByText("Filtrar")).toBeInTheDocument();
  });
});
