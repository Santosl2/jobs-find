import type { JobsTypes, GithubResponse, Filter } from "@/interfaces";
import { mergeArray, sortData } from "@/shared/utils";
import { filterByData } from "@/shared/utils/filterData";

import { api } from "../api";

const TYPES = {
  frontend: ["frontendbr/vagas/issues"],
  backend: ["backend-br/vagas/issues"],
};

export async function getData(jobType: JobsTypes, filters: Filter = []) {
  const jobs = TYPES[jobType].map(async (url) =>
    api.get<GithubResponse[]>(url)
  );

  const jobsRequest = await Promise.all(jobs);
  const data = mergeArray(jobsRequest);

  if (filters.length) {
    return sortData(filterByData(data, filters));
  }

  return sortData(data);
}

export function filterData(data: GithubResponse[] = [], filters: Filter = []) {
  if (filters.length) {
    return sortData(filterByData(data, filters));
  }

  return sortData(data);
}
