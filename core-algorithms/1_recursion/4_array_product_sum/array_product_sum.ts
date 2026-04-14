const array_product_sum = (arr: any, depth = 1) => {
  let sum = 0;
  for (let i of arr) {
    if (Array.isArray(i)) {
      sum = sum + array_product_sum(i, depth + 1);
    } else {
      sum = sum + i;
    }
  }
  return sum * depth;
};

console.log(array_product_sum([1, 2, [2, 3], 6, [[2, 3], 1], 7]));
