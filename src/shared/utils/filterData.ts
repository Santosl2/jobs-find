/* eslint-disable array-callback-return */
import { GithubResponse } from "@/interfaces";

import { FILTER_OPTIONS } from "../contants";

const getFilterData = (filter: string) =>
  FILTER_OPTIONS.find((f) => f.value === filter);

export function filterByData(data: GithubResponse[], filters: string[]) {
  if (filters.length === 0) return data;

  const arrayFiltered: GithubResponse[] = [];

  data.forEach((item) => {
    const { labels } = item;

    labels.forEach(({ name }) => {
      filters.forEach((filter) => {
        const filterData = getFilterData(filter);

        if (name === filterData?.label && !arrayFiltered.includes(item)) {
          arrayFiltered.push(item);
        }
      });
    });
  });

  return arrayFiltered;
}
