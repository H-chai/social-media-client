/* eslint-env jest */

import { remove } from "../../storage";
import { logout } from "./logout";

jest.mock("../../storage", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("removes token and profile from localStorage", () => {
    logout();
    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
    expect(remove).toHaveBeenCalledTimes(2);
  });
});
