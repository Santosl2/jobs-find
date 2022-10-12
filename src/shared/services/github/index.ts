import { AxiosResponse } from "axios";

import type {
  JobsTypes,
  GithubResponse,
  Filter,
  JobsState,
} from "@/interfaces";
import { mergeArray, sortData } from "@/shared/utils";
import { filterByData } from "@/shared/utils/filterData";

import { api } from "../api";

const TYPES = {
  frontend: ["frontendbr/vagas/issues"],
  backend: ["backend-br/vagas/issues"],
};

export async function getData(
  jobType: JobsTypes,
  filters: Filter = [],
  page = 1
) {
  const jobs = TYPES[jobType].map(async (url) =>
    api.get<GithubResponse[]>(`${url}?page=${page}`)
  );

  const jobsRequest = await Promise.all(jobs);
  const data = mergeArray<AxiosResponse<GithubResponse[], any>[]>(jobsRequest);

  if (filters.length) {
    return sortData(filterByData(data, filters));
  }

  return sortData(data);
}

export function filterData(data: JobsState | undefined, filters: Filter = []) {
  if (!data) return [];

  const jobs = mergeArray<GithubResponse[][]>(data.pages);

  if (filters.length) {
    return sortData(filterByData(jobs, filters));
  }

  return sortData(jobs);
}

export async function getIssueById(jobType: JobsTypes, id: number) {
  const type = TYPES[jobType][0];

  const issueById = await api.get<GithubResponse>(`${type}/${id}`);

  return issueById.data;
}
