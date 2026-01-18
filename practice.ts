const mergeFunc = (arr1: Array<number>, arr2: Array<number>): Array<number> => {
  let i = 0;
  let j = 0;
  let mergedArray: Array<number> = [];

  while (i < arr1.length && j < arr2.length) {}
  return mergedArray;
};

const func = (arr: Array<number>): Array<number> => {
  if (arr.length <= 2) {
    return arr;
  }

  const median = Math.floor(arr.length / 2);
  const lhs = func(arr.slice(0, median));
  const rhs = func(arr.slice(median));
  return mergeFunc(lhs, rhs);
};

const mergeSortedArrayf = func([2, 43, 1, 23, 54, 13, 119, 0]);

console.log(mergeSortedArrayf);
