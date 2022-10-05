import type { JobsTypes, GithubResponse } from "@/interfaces";
import { sortData } from "@/shared/utils/sort";

import { api } from "../api";

const TYPES = {
  frontend: ["frontendbr/vagas/issues"],
  backend: ["backend-br/vagas/issues"],
};

export async function getData(jobType: JobsTypes) {
  const jobs = TYPES[jobType].map(async (url) => api.get<GithubResponse>(url));

  const jobsRequest = await Promise.all(jobs);

  const jobsData = jobsRequest
    .map((job) => job.data)
    .reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);

  return sortData(jobsData);
}
