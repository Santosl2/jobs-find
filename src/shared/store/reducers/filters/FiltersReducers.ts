import { PayloadAction } from "@reduxjs/toolkit";

export const filtersReducers = {
  addFilter: (state: any, { payload }: PayloadAction<string>) => {
    return [...state, payload];
  },

  removeFilter: (state: any, { payload }: PayloadAction<string>) => {
    const findAllStatesDiffValue = state.filter((e: string) => e !== payload);

    return [...findAllStatesDiffValue];
  },
};
