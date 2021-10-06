export const deepClone = (array: Array<any>): Array<any> => {
  const result: Array<any> = [];

  array.forEach(el => {
    if (!Array.isArray(el)) {
      result.push(el);
    } else {
      result.push(deepClone(el));
    }
  });

  return result;
};
