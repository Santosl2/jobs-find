import { useCallback, BaseSyntheticEvent } from "react";
import { useDispatch } from "react-redux";

import { Checkbox } from "@/components/Checkbox";
import { FILTER_OPTIONS } from "@/shared/contants";
import { useSelectorFilter } from "@/shared/hooks";
import { addFilter, removeFilter } from "@/shared/store/reducers/filters";

export function FilterOptions() {
  const filters = useSelectorFilter();
  const dispatch = useDispatch();

  const verifyIfIsSelected = useCallback(
    (value: string) => {
      return filters.includes(value);
    },
    [filters]
  );

  const handleSelectFilter = useCallback(
    (e: BaseSyntheticEvent) => {
      const { value } = e.target as HTMLInputElement;

      if (verifyIfIsSelected(value)) {
        dispatch(removeFilter(value));
        return;
      }

      dispatch(addFilter(value));
    },
    [verifyIfIsSelected, dispatch]
  );

  return (
    <>
      {FILTER_OPTIONS.map((option) => (
        <Checkbox
          title={option.label}
          value={option.value}
          key={option.value}
          checked={verifyIfIsSelected(option.value)}
          onChange={handleSelectFilter}
        />
      ))}
    </>
  );
}
