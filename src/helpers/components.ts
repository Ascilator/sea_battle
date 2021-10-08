import { matrix } from '@/constants';
import { deepClone } from './lodash';

export const getColor = (colorCode: number): string => {
  switch (colorCode) {
    case 0:
      return '#122FAA'; // for sea
    case 1:
      return '#FFC618';
    case 2:
      return '#FF2B2B';
    case 3:
      return '#778899'; // for ship
    case 4:
      return '#122FAA'; // for impossible sea
    case 5:
      return '#00ff00'; // for temp ships
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

const dropSheep = (fieldMatrix: Array<Array<number>>, drop: boolean): void => {
  if (!drop) {
    for (let i = 0; i < fieldMatrix.length; i++) {
      for (let j = 0; j < fieldMatrix.length; j++) {
        if (fieldMatrix[i][j] === 5) {
          if (fieldMatrix[i - 1]) {
            if (fieldMatrix[i - 1][j - 1] === 0) {
              fieldMatrix[i - 1][j - 1] = 4;
            }
            if (fieldMatrix[i - 1][j] === 0) {
              fieldMatrix[i - 1][j] = 4;
            }
            if (fieldMatrix[i - 1][j + 1] === 0) {
              fieldMatrix[i - 1][j + 1] = 4;
            }
          }

          if (fieldMatrix[i + 1]) {
            if (fieldMatrix[i + 1][j - 1] === 0) {
              fieldMatrix[i + 1][j - 1] = 4;
            }
            if (fieldMatrix[i + 1][j + 1] === 0) {
              fieldMatrix[i + 1][j + 1] = 4;
            }

            if (fieldMatrix[i + 1][j] === 0) {
              fieldMatrix[i + 1][j] = 4;
            }
          }

          if (fieldMatrix[i][j - 1] === 0) {
            fieldMatrix[i][j - 1] = 4;
          }
          if (fieldMatrix[i][j + 1] === 0) {
            fieldMatrix[i][j + 1] = 4;
          }
        }
      }
    }
  }

  fieldMatrix.forEach(row => {
    row.forEach((cell, i) => {
      if (cell === 5) {
        if (drop) {
          row[i] = 0;
        } else {
          row[i] = 3;
        }
      }
    });
  });
};

const placeShip = (
  fieldMatrix: Array<Array<number>>,
  length: number,
  x: number,
  y: number,
  alignment: number
): boolean => {
  for (let i = 0; i < length; i++) {
    if (
      alignment === 1 &&
      x - i >= 0 &&
      fieldMatrix[x - i][y] !== undefined &&
      fieldMatrix[x - i][y] !== 3 &&
      fieldMatrix[x - i][y] !== 4
    ) {
      fieldMatrix[x - i][y] = 5;
    } else if (
      alignment === 0 &&
      y - i >= 0 &&
      fieldMatrix[x][y - i] !== undefined &&
      fieldMatrix[x][y - i] !== 3 &&
      fieldMatrix[x][y - i] !== 4
    ) {
      fieldMatrix[x][y - i] = 5;
    } else {
      dropSheep(fieldMatrix, true);
      return false;
    }
  }

  dropSheep(fieldMatrix, false);
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
      isPlaced = placeShip(field, getLength(i), x, y, isVertical);
    }
  }

  return field;
};
