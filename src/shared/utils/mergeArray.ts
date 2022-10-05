import { AxiosResponse } from "axios";

export function mergeArray<T>(data: AxiosResponse<T[], any>[]) {
  const arrays = data
    .map((job) => job.data)
    .reduce((acc, curr) => {
      return [...acc, ...curr];
    }, []);

  return arrays;
}
