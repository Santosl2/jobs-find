import { useSelector } from "react-redux";

import { FilterSliceName } from "@/shared/store/reducers/filters/Filters";

type SelectorFilter = {
  [key: string]: string[];
};

export function useSelectorFilter() {
  const filters = useSelector(
    (state: SelectorFilter) => state[FilterSliceName]
  );

  return filters;
}
