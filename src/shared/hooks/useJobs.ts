import { JobsTypes } from "@/interfaces";
import type { GithubResponse, Filter } from "@/interfaces";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { getData } from "../services/github";

export function useJobs(
  type: JobsTypes = "frontend",
  filters: Filter = []
): UseQueryResult<GithubResponse[], unknown> {
  return useQuery(["jobs"], () => getData(type, filters), {
    staleTime: 1000 * 60 * 60, // 1hora
    cacheTime: 1000 * 60 * 60,
  });
}
