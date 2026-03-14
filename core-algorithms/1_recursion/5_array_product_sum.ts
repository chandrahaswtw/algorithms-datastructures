/*
-----------------
ARRAY PRODUCT SUM
-----------------

Say the array is as below:

[1, 2, [2, 3], 6, [[2, 3], 1], 7]

First level depth 1, second level array has 2 and so on.

Our duty is to find the sum multiplied by depth as below:

1 + 2 + (2 + 3)*2 + 6 + ((2 + 3)*3 + 1)*2 + 7 = 58

*/

const product_sum = (arr: any, depth = 1) => {
  let sum = 0;
  for (let i of arr) {
    if (Array.isArray(i)) {
      sum = sum + product_sum(i, depth + 1);
    } else {
      sum = sum + i;
    }
  }
  return sum * depth;
};

console.log(product_sum([1, 2, [2, 3], 6, [[2, 3], 1], 7]));
