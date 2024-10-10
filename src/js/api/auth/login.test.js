/* eslint-env jest */

import { save } from "../../storage";
import { login } from "./login";

jest.mock("../../storage", () => ({
  save: jest.fn(),
}));

jest.mock("../headers.js", () => ({
  headers: jest.fn(),
}));

const email = "test@stud.noroff.no";
const password = "testPasswordForJest";
const accessToken = "mockAccessTokenForTesting";

const mockUserProfile = {
  email: email,
  password: password,
  accessToken: accessToken,
};

const mockLoginFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockUserProfile),
});

global.fetch = mockLoginFetchSuccess;

describe("login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("stores a token when provided with valid credentials", async () => {
    await login(email, password);

    console.log("Access Token to save:", accessToken);

    expect(save).toHaveBeenCalledWith("token", accessToken);
    expect(save).toHaveBeenCalledWith("profile", mockUserProfile);
  });
});
