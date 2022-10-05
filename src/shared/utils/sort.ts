import type { GithubResponse } from "@/interfaces";

export const sortData = (data: GithubResponse[]) => {
  return data.sort((a, b) => {
    const aDate = new Date(a.created_at);
    const bDate = new Date(b.created_at);

    return bDate.getTime() - aDate.getTime();
  });
};
