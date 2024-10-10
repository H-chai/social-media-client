/* eslint-env jest */

import { load } from "./load";

const mockLocalStorage = {
  store: {},

  setItem: jest.fn((key, value) => {
    mockLocalStorage.store[key] = value;
  }),

  getItem: jest.fn((key) => {
    return mockLocalStorage.store[key] || null;
  }),

  removeItem: jest.fn(() => {
    mockLocalStorage.store = {};
  }),
};

global.localStorage = mockLocalStorage;

describe("load function", () => {
  it("should get a value from localStorage with correct key", () => {
    const key = "testKey";
    const value = "testValue";

    localStorage.setItem(key, JSON.stringify(value));

    const result = load(key);
    expect(result).toEqual(value);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });

  it("should return null if JSON.parse throws an error", () => {
    const key = "invalidJson";
    localStorage.setItem(key, "invalid_json");

    const result = load(key);
    expect(result).toBeNull();
  });
});
