/*
-----------------
Problem statement
-----------------

Given an array, return true if any value appears atleast twice in the array. Return false if all are distinct.

-----------
Explanation
-----------

- We declare an object (Hashmap), and we iterate over the array.
- The moment it finds the duplicate key it returns true else false.

*/

const containsDuplicate = (nums: Array<number>) => {
  const numHash: Record<number, boolean> = {};
  for (let i of nums) {
    if (numHash[i]) {
      return true;
    } else {
      numHash[i] = true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7]));
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 7]));
