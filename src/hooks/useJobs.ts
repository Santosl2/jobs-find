import type { GithubResponse } from "@/interfaces/Response";
import { getData } from "@/shared/services/github";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useJobs() {
  return useQuery(["jobs"], () => getData("frontend"), {
    staleTime: 1000 * 60 * 60, // 1hora
    cacheTime: 1000 * 60 * 60,
  }) as UseQueryResult<GithubResponse[], unknown>;
}
