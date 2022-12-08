import { useMemo } from "react";

import { Header } from "../Header";
import { LeftBar } from "../LeftBar";
import type { ContentProps } from "./Content.type";

export function Content({ children, showFilters = true }: ContentProps) {
  const classNames = useMemo(() => {
    const base = "grid grid-cols-1 gap-5 p-2";
    const withFilters = " md:grid-cols-body";

    if (showFilters) {
      return `${base} ${withFilters}`;
    }

    return base;
  }, [showFilters]);

  return (
    <>
      <Header />
      <div className={classNames} data-testid="contentTest">
        {showFilters && <LeftBar />}
        {children}
      </div>
    </>
  );
}
