import axios from "axios";

import { PER_PAGE } from "../contants";

export const api = axios.create({
  baseURL: "https://api.github.com/repos/",
  params: {
    per_page: PER_PAGE,
  },
});
