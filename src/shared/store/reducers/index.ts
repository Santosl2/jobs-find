import { combineReducers } from "@reduxjs/toolkit";

import FiltersReducers, { FilterSliceName } from "./filters/Filters";

export const combinedReducer = combineReducers({
  [FilterSliceName]: FiltersReducers,
});
