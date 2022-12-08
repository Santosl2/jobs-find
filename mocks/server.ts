/* eslint-disable import/no-extraneous-dependencies */
import { setupServer } from "msw/node";

import { handlers } from "./handlers";

export const server = setupServer(...handlers);

if (process.env.NODE_ENV === "test") {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());
}
