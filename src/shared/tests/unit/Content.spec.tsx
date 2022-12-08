import { Content } from "@/components/Content";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "../render";

describe("Content Component Test", () => {
  it("should be able to render correctly", () => {
    renderWithRedux(<Content>Test</Content>);

    expect(screen.getByTestId("contentTest")).toBeInTheDocument();
  });

  it("should NOT be able to appear left bar", () => {
    renderWithRedux(<Content showFilters={false}>Test</Content>);

    expect(screen.queryByText("Filtrar")).not.toBeInTheDocument();
  });
});
