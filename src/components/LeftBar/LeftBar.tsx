import { FilterOptions } from "./FilterOptions/FilterOptions";

export function LeftBar() {
  return (
    <div className="sticky top-2 self-start">
      <h4 className="text-[#B9BDCF] font-bold font-title text-sm uppercase">
        Filtrar
      </h4>

      <FilterOptions />
    </div>
  );
}
