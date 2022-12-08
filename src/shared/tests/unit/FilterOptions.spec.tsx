import { FilterOptions } from "@/components/LeftBar/FilterOptions/FilterOptions";
import { FILTER_OPTIONS } from "@/shared/contants";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithRedux } from "../render";

const filterSelected = FILTER_OPTIONS[0];

function render() {
  const { mockStore, rerenderWithRedux } = renderWithRedux(
    <FilterOptions />,
    {}
  );

  return { mockStore, rerenderWithRedux };
}

describe("LeftBar Component Test", () => {
  it("should be able to render correctly", () => {
    render();

    FILTER_OPTIONS.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("should be able to add filter correctly", () => {
    const { mockStore } = render();

    const filterLabel = screen.getByText(filterSelected.label);

    expect(filterLabel).toBeInTheDocument();

    expect(mockStore.getState().filters).toEqual([]);

    fireEvent.click(filterLabel);

    expect(mockStore.getState().filters).toEqual([filterSelected.value]);
  });

  it("should be able to add and remove filter correctly", () => {
    const { mockStore } = render();

    const filterLabel = screen.getByText(filterSelected.label);

    expect(filterLabel).toBeInTheDocument();

    expect(mockStore.getState().filters).toEqual([]);

    fireEvent.click(filterLabel);

    expect(mockStore.getState().filters).toEqual([filterSelected.value]);

    fireEvent.click(filterLabel);

    expect(mockStore.getState().filters).toEqual([]);
  });
});
