/*
-----------------
PROBLEM STATEMENT
-----------------
Product of array except self.

Say we have an array [1,2,3,4]

At index 0, --> We skip the 1 and we calculate the product of remaining elements. --> 2 * 3 * 4 --> 24
At index 1, --> We skip the 2 and we calculate the product of remaining elements. --> 1 * 3 * 4 --> 12
At index 2, --> We skip the 3 and we calculate the product of remaining elements. --> 1 * 2 * 4 --> 8
At index 3, --> We skip the 4 and we calculate the product of remaining elements. --> 1 * 2 * 3 --> 6

The output is [24, 12, 8, 6]

NOte: This should've O(n) time complexity.

-----------
EXPLANATION
-----------

*/

const product_of_elements_except_self = (arr: Array<number>) => {
  const len = arr.length;

  let preArr: Array<number> = new Array(len);
  let postArr: Array<number> = new Array(len);
  let productArr: Array<number> = [];

  // preArr calculation
  for (let i = 0; i < len; i++) {
    preArr[i] = (preArr[i - 1] ?? 1) * (arr[i - 1] ?? 1);
  }

  console.log(preArr);

  // postArr calculation
  for (let i = len - 1; i >= 0; i--) {
    postArr[i] = (postArr[i + 1] ?? 1) * (arr[i + 1] ?? 1);
  }

  console.log(postArr);

  // postArr calculation
  for (let i = 0; i < len; i++) {
    productArr[i] = preArr[i] * postArr[i];
  }

  return productArr;
};

console.log(product_of_elements_except_self([1, 2, 3, 4]));
