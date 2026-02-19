/*
-----------------
PROBLEM STATEMENT
-----------------

Longest consecutive sequence (LCS)

If input is [100, 4, 200, 2, 3, 1] --> The longest consecutive sequence is [1,2,3,4] and it's length is 4

We will be provided in an unsorted array and we must return in O(n) time complexity.

-----------
EXPLANATION
-----------

The problem requires finding the longest sequence of consecutive integers in an unsorted array, with an overall time complexity of O(n). Since sorting would take O(n log n), we must avoid sorting and use a more efficient approach.

Step 1: Use a Hash Set for Fast Lookup
---------------------------------------

Insert all elements from the array into a hash-based data structure (like a set or hash map).
This allows constant-time lookup (O(1)) to check whether a number exists in the array.

Step 2: Identify Valid Sequence Starting Points
------------------------------------------------

For each number in the array, determine whether it is the start of a consecutive sequence.
A number is considered a starting point only if the previous number (number - 1) does not exist in the set.

Why?

If the previous number exists, then the current number is part of an already existing sequence, and we should not start counting from it again. This prevents duplicate work and ensures linear time complexity.

Step 3: Build the Consecutive Sequence
---------------------------------------

For each valid starting number:
- Keep checking if the next consecutive number (current + 1) exists in the set.
- Continue extending the sequence until the consecutive pattern breaks.
- Track the length of this sequence.

Step 4: Track the Maximum Length
---------------------------------

While building sequences, maintain a variable that keeps track of the maximum length encountered so far.
After processing all numbers, return the longest sequence (or its length, depending on the requirement).

*/

const longestConsecutiveSequence = (arr: Array<number>) => {
  let LCS: Array<number> = [];
  let currentLCS: Array<number> = [];

  // Converted the incoming array into the hashSet.
  const hash = arr.reduce(
    (acc, cur) => {
      acc[cur] = true;
      return acc;
    },
    {} as Record<number, boolean>,
  );

  for (let val of arr) {
    if (val - 1 in hash) {
      continue;
    }
    let current = val;
    while (current in hash) {
      currentLCS.push(current);
      current++;
    }
    if (currentLCS.length > LCS.length) {
      LCS = currentLCS;
    }
    currentLCS = [];
  }

  return LCS;
};

console.log(longestConsecutiveSequence([100, 4, 200, 2, 3, 1]));
