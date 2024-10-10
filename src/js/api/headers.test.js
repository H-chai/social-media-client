/* eslint-env jest */

import * as storage from "../storage";
import { headers } from "./headers";

jest.mock("../storage", () => ({
  load: jest.fn(),
}));

describe("headers function", () => {
  it("returns correct headers when contentType is provided", () => {
    const contentType = "application/json";
    const token = "mockAccessTokenForTesting";

    storage.load.mockReturnValue(token);
    const result = headers(contentType);

    expect(result).toEqual({
      "Content-Type": contentType,
      Authorization: `Bearer ${token}`,
    });
  });
});
