import { matrix } from '@/constants';
import { deepClone } from './lodash';

export const getColor = (colorCode: number): string => {
  switch (colorCode) {
    case 0:
      return '#122FAA';
    case 1:
      return '#FFC618';
    case 2:
      return '#FF2B2B';
    case 3:
      return '#778899';
    default:
      return '#ffffff';
  }
};

const getLength = (iteration: number): number => {
  if (iteration === 0) return 4;
  if (iteration === 1 || iteration === 2) return 3;
  if (iteration >= 3 && iteration <= 5) return 2;
  return 1;
};

const placeShip = (
  fieldMatrix: Array<Array<number>>,
  lenght: number,
  x: number,
  y: number,
  alignment: number
): boolean => {
  console.log(fieldMatrix, lenght, x, y, alignment);
  return true;
};

export const generateShipsPosition = (): Array<Array<number>> => {
  const NUMBER_OF_SHIPS = 10;
  const field = deepClone(matrix);

  for (let i = 0; i < NUMBER_OF_SHIPS; i++) {
    let isPlaced = false;
    while (!isPlaced) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const isVertical = Math.floor(Math.random() * 2);
      placeShip(field, getLength(i), x, y, isVertical);
      isPlaced = true;
    }
  }

  return [[]];
};
