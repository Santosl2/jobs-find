import { InfiniteData } from "@tanstack/react-query";

import { GithubResponse } from "./Response";

export type Job = Pick<
  GithubResponse,
  "user" | "title" | "labels" | "created_at"
>;

export type JobsTypes = "frontend" | "backend";

export type JobsState = InfiniteData<GithubResponse[]>;
