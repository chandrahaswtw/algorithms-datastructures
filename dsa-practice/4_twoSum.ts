/*
-----------------
PROBLEM STATEMENT
-----------------

Suppose we have an array [11, 2, 7, 6, 8] and a target sum 9.

The goal of the Two Sum problem is to find the indices of two distinct elements in the array whose values add up to the target.

In this array, the elements 2 and 7 add up to 9 (2 + 7 = 9).
Since 2 is at index 1 and 7 is at index 2, the output is [1, 2] or [2, 1] --> The order soesn't matter.

Also there is only one exact solution and element cannot be repeated.

-----------
EXPLANATION
-----------

We use a hash map to store elements we have already seen along with their indices. This allows us to check whether the required complement exists in constant time.

Step-by-step Explanation:

1. Initialize an empty hash map.
   The map stores elements in the format:
   value -> index

2. Start iterating through the array.

   Index 0, Value = 11
   Required complement = 9 - 11 = -2
   -2 is not present in the map.
   Store 11 -> 0 in the map.

   Index 1, Value = 2
   Required complement = 9 - 2 = 7
   7 is not present in the map.
   Store 2 -> 1 in the map.

   Index 2, Value = 7
   Required complement = 9 - 7 = 2
   2 is present in the map at index 1.
   This means we have found the required pair.

3. Return the indices [1, 2].

Why this Works:

* The hash map allows fast lookup of previously seen elements.
* We only traverse the array once.
* As soon as the complement is found, we return the result.

Time Complexity:
O(n), where n is the number of elements in the array.

Space Complexity:
O(n), due to the additional hash map used for storage.

*/

const twoSum = (arr: Array<number>, target: number) => {
  const hashMap: Record<number, number> = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= target) {
      let complement = target - arr[i];
      if (hashMap[complement]) {
        return [i, hashMap[complement]];
      } else {
        hashMap[arr[i]] = i;
      }
    }
  }
};

console.log(twoSum([11, 2, 7, 6, 8], 9));
