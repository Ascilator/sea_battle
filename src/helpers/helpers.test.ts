import { FieldType } from '@/types';
import {
  getColor,
  getLength,
  createEmptyMatrix,
  generateShipsPosition,
  isKilled
} from './components';
import { deepClone } from './lodash';

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

test('getLength func', () => {
  expect(getLength(0)).toBe(4);
  expect(getLength(1)).toBe(3);
  expect(getLength(2)).toBe(3);
  expect(getLength(3)).toBe(2);
  expect(getLength(4)).toBe(2);
  expect(getLength(5)).toBe(2);
  expect(getLength(6)).toBe(1);
  expect(getLength(7)).toBe(1);
  expect(getLength(8)).toBe(1);
  expect(getLength(9)).toBe(1);
  expect(getLength(10)).toBe(0);
});

test('createEmptyMatrix', () => {
  const field: FieldType = createEmptyMatrix();
  field.forEach(row => {
    expect(row).toHaveLength(10);
    row.forEach(cell => {
      expect(cell).toBe(0);
    });
  });
});

test('getShip position', () => {
  const field: FieldType = generateShipsPosition();
  const [numberOfDecks, impossiblesSeas]: Array<number> = field.reduce(
    (prevValue, row) => {
      row.forEach(el => {
        if (el === 3) prevValue[0]++;
        if (el === 4) prevValue[1]++;
      });
      return prevValue;
    },
    [0, 0]
  );
  expect(numberOfDecks).toBe(20);
  expect(impossiblesSeas).toBeLessThanOrEqual(78);
  expect(impossiblesSeas).toBeGreaterThanOrEqual(36);
});

test('isKilled', () => {
  // initializing field
  const field: FieldType = createEmptyMatrix();
  field[0][0] = 3; // [ ]

  field[2][0] = 3; // [ ]
  field[2][1] = 8; // [x]

  field[4][0] = 8; // [x]
  field[4][1] = 3; // [ ]
  field[4][2] = 8; // [x]

  field[6][0] = 8; // [x]
  field[6][1] = 8; // [x]
  field[6][2] = 3; // [ ]
  field[6][3] = 8; // [x]

  field[8][0] = 8; // [x]
  field[8][1] = 3; // [ ]
  field[8][2] = 3; // [ ]
  field[8][3] = 8; // [x]

  field[0][8] = 8; // [x][x][ ][x]
  field[1][8] = 8;
  field[2][8] = 3;
  field[3][8] = 8;

  // 1 deck
  expect(isKilled(field, 0, 0)).toBeTruthy();

  // 2 deck
  expect(isKilled(field, 2, 0)).toBeTruthy();

  // 3 deck
  expect(isKilled(field, 4, 1)).toBeTruthy();

  // 4 deck
  expect(isKilled(field, 6, 2)).toBeTruthy();

  // miss
  expect(isKilled(field, 9, 9)).toBeFalsy();

  // not last hit
  expect(isKilled(field, 8, 1)).toBeFalsy();

  // horizontal
  expect(isKilled(field, 2, 8)).toBeTruthy();
});
