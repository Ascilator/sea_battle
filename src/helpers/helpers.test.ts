import { deepClone } from './lodash';

test('testing deep clone func', () => {
  expect(deepClone([1, 2, 3])).toBe([1, 2, 3]);
});
