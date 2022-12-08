/* eslint-disable import/no-extraneous-dependencies */
import { rest } from "msw";

import { MOCKED_RESPONSE_PAGE_1, MOCKED_RESPONSE_PAGE_2 } from "./responses";

export const handlers = [
  rest.get(
    "https://api.github.com/repos/frontendbr/vagas/issues",
    async (req, res, ctx) => {
      const pageNumber = Number(req.url.searchParams.get("page"));

      let response;

      if (pageNumber === 1) {
        response = MOCKED_RESPONSE_PAGE_1;
      }

      if (pageNumber >= 2) {
        response = MOCKED_RESPONSE_PAGE_2;
      }

      return res(ctx.json(response));
    }
  ),
];
