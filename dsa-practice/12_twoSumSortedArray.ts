/*
-----------------
PROBLEM STATEMENT
-----------------

Suppose we have an array [2, 5, 6, 7, 10, 12, 21, 42] and a target sum 13.

The goal of the Two Sum problem is to find the indices of two distinct elements in the array whose values add up to the target.

In this array, the elements 6 and 7 add up to 13 (6 + 7 = 13).

Also there is only one exact solution and element cannot be repeated.

-----------
EXPLANATION
-----------

We have done this using hashmap. Since the array is sorted, we can use 2 pointer solution.
    - We have a left point that begin at 0 and right pointer starts at right most index.
    - We calculate the sum of left and right pointers. 
        - If the sum is more than target --> We need to decrease the right index.
        - If the sum is less than target --> We need to increase the left index.
*/

function twoSumSortedArray(
  arr: Array<number>,
  target: number,
): Array<number> | void {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === target) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > target) {
      right--;
    } else if (arr[left] + arr[right] < target) {
      left++;
    }
  }
}

console.log(twoSumSortedArray([2, 5, 6, 7, 10, 12, 21, 42], 13));
