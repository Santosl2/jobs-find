import { FilterOptions } from "./FilterOptions/FilterOptions";

export function LeftBar() {
  return (
    <div className="md:sticky top-2 self-start" data-testid="leftBarTest">
      <h4 className="text-[#B9BDCF] font-bold font-title text-sm uppercase">
        Filtrar
      </h4>

      <FilterOptions />
    </div>
  );
}
