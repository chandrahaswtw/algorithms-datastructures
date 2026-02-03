/*
-----------------
PROBLEM STATEMENT
-----------------
From the given array return top k elements which has highest frequency.

-----------
EXPLANATION
-----------

Key Idea:
An element’s frequency can never be greater than the length of the array (n).
Instead of sorting elements by frequency, we group elements based on how often they appear using buckets.

Step 1: Count Frequencies
Traverse the array and count how many times each element appears.

Frequency Map:
23 -> 3
56 -> 2
78 -> 4
2 -> 1
3 -> 1
4 -> 1
5 -> 1
6 -> 1
7 -> 1
8 -> 1

Total number of elements (n) = 16

Step 2:
Create an array of size n + 1(17 buckets).
Each index represents the frequency, and the value is a list of numbers with that frequency.

Buckets after filling:
Frequency 1 : [2, 3, 4, 5, 6, 7, 8]
Frequency 2 : [56]
Frequency 3 : [23]
Frequency 4 : [78]

(All other bucket indices are empty.)

Step 3: Collect Top K Elements
Start traversing buckets from the highest frequency to the lowest.

Frequency 4 → add [78] → result = [78]

Frequency 3 → add [23] → result = [78, 23]

Frequency 2 → add [56] → result = [78, 23, 56]

Frequency 1 → add [2] → result = [78, 23, 56, 2]

Stop once k = 4 elements are collected.

Final Output:
[78, 23, 56, 2]
*/

const topKFrequency = (nums: Array<number>, k) => {
  const hashMap = new Map<number, number>();
  const bucket: Array<Array<number>> = new Array(nums.length + 1)
    .fill(null)
    .map((el) => []);

  // Captured frequency
  for (let num of nums) {
    hashMap.set(num, (hashMap.get(num) ?? 0) + 1);
  }

  // Pushing elements in array based on frequency as index. So that when we iter from other end, we get all highest frequency elements.
  for (let [num, frequency] of hashMap) {
    bucket[frequency].push(num);
  }

  // We iterate from
  const result: Array<number> = [];
  for (let i = bucket.length - 1; i >= 0 && result.length <= k; i--) {
    result.push(...bucket[i]);
    console.log(result);
  }

  return result.slice(0, k);
};

console.log(
  topKFrequency([23, 23, 23, 56, 56, 78, 78, 78, 78, 2, 3, 4, 5, 6, 7, 8], 4),
);
