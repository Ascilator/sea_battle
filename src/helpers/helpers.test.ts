import { getColor } from './components';
import { deepClone } from './lodash';

document.body.innerHTML = '<div id="root"></div>';

test('deepClone func', () => {
  type deepCloneType = Array<Array<number> | number>;
  const a: deepCloneType = [1, 2, 3, 4];
  let b: deepCloneType = deepClone(a);

  // test is really clone
  expect(deepClone(a)).toEqual(expect.arrayContaining(a));

  // test if it really independent
  a.push(5);
  expect(b).not.toEqual(expect.arrayContaining(a));
  a.pop();

  a.push([1, 2]);
  expect(deepClone(a)).toEqual(expect.arrayContaining(a));

  b = deepClone(a);
  if (Array.isArray(a[4])) a[4].push(3);
  expect(b).not.toEqual(expect.arrayContaining(a));
  a.pop();
});

test('getColor func', () => {
  expect(getColor(0)).toEqual('#122FAA');
  expect(getColor(1)).toEqual('#FFC618');
  expect(getColor(2)).toEqual('#FF2B2B');
  expect(getColor(3)).toEqual('#778899');
  expect(getColor(4)).toEqual('#122FAA');
  expect(getColor(5)).toEqual('#00ff00');
  expect(getColor(6)).toEqual('#ff0000');
  expect(getColor(7)).toEqual('#4169E1');
  expect(getColor(8)).toEqual('#00ff00');
  expect(getColor(-1)).toEqual('#ffffff');
  expect(getColor(9)).toEqual('#ffffff');
});
