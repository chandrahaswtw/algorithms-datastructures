/*
-------------
LINEAR SEARCH
-------------

As the term "linear search" suggests, this method searches for a specific element by iterating through each item in the array. The array does not need to be sorted and can be in any form. Below is the implementation:
We aim to find the index of a given element by passing the array and the target element as parameters to the function.

---------------
TIME COMPLEXITY
---------------

- Best case O(1) if element is located at the first.
- Worst case O(n) if element is located at the end.
- General case tends to O(n)
*/

const linearSearch = (arr: number[], targetElement: number) => {
  let pos = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetElement) {
      pos = i + 1;
    }
  }
  return pos;
};

const linearPos = linearSearch(
  [1, 2, 55, 789, 432, 244, 7899, 8002, 1001],
  2446
);

console.log(linearPos);
