export const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const alphabet = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k"];

const matrix = new Array<Array<number | string>>(10);
for (let j = 0; j < matrix.length; j++) {
  matrix[j] = new Array(10);
  for (let i = 0; i < matrix[j].length; i++) {
    matrix[j][i] = 0;
  }
}

export { matrix };
