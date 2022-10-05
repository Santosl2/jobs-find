import { JobsTypes } from "@/interfaces";
import type { Filter } from "@/interfaces";
import { useInfiniteQuery } from "@tanstack/react-query";

import { PER_PAGE } from "../contants";
import { getData } from "../services/github";

export function useInfinityJobs(
  type: JobsTypes = "frontend",
  filters: Filter = []
) {
  return useInfiniteQuery(
    ["jobss"],
    ({ pageParam = 1 }) => getData(type, filters, pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === PER_PAGE) return pages.length + 1;

        return false;
      },

      staleTime: 1000 * 60 * 60, // 1hora
      cacheTime: 1000 * 60 * 60,
    }
  );
}
