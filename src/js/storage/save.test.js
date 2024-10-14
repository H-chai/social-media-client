/* eslint-env jest */

import { save } from './save';

const mockLocalStorage = {
  store: {},

  setItem: jest.fn((key, value) => {
    mockLocalStorage.store[key] = value;
  }),
};

global.localStorage = mockLocalStorage;

describe('save function', () => {
  it('should save a value to localStorage with the correct key', () => {
    const key = 'testKey';
    const value = 'testValue';

    save(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value),
    );
  });
});
