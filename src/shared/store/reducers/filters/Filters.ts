import { createSlice } from "@reduxjs/toolkit";

import { filtersReducers } from "./FiltersReducers";

const initialState = [] as string[];

const FilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: filtersReducers,
});

export const FilterSliceName = FilterSlice.name;

export const { addFilter, removeFilter } = FilterSlice.actions;

export default FilterSlice.reducer;
