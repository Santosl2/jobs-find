import { Labels, User } from "./Github";

export type GithubResponse = {
  id: number;
  title: string;
  body: string;
  author_association: string;

  labels: Labels[];
  user: User;
  created_at: number;
};
