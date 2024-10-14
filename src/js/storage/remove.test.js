/* eslint-env jest */

import { remove } from './remove';

const mockLocalStorage = {
  store: {},

  setItem: jest.fn((key, value) => {
    mockLocalStorage.store[key] = value;
  }),

  getItem: jest.fn((key) => {
    return mockLocalStorage.store[key] || null;
  }),
};

global.localStorage = mockLocalStorage;

describe('remove function', () => {
  it('should remove a key from localStorage', () => {
    const key = 'testKey';
    const value = 'testValue';

    localStorage.setItem(key, JSON.stringify(value));

    remove(key);
    expect(localStorage.getItem(key)).toBeNull();
  });
});
