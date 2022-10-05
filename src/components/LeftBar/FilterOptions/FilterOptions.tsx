import { useState, useCallback, BaseSyntheticEvent } from "react";

import { Checkbox } from "@/components/Checkbox/Checkbox";
import { FILTER_OPTIONS } from "@/shared/contants";

export function FilterOptions() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const verifyIfIsSelected = useCallback(
    (value: string) => {
      return selectedFilters.includes(value);
    },
    [selectedFilters]
  );

  const handleSelectFilter = useCallback(
    (e: BaseSyntheticEvent) => {
      const { value } = e.target as HTMLInputElement;

      if (verifyIfIsSelected(value)) {
        setSelectedFilters((prev) => prev.filter((item) => item !== value));
      } else {
        setSelectedFilters((prev) => [...prev, value]);
      }
    },
    [verifyIfIsSelected]
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
