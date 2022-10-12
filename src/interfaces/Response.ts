import { Labels, User } from "./Github";

export type GithubResponse = {
  id: number;
  title: string;
  body: string;
  author_association: string;
  number: number;

  labels: Labels[];
  user: User;
  created_at: number;
  url: string;
};
