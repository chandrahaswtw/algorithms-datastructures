/*
--------------
INSERTION SORT
--------------

-	This uses a moving marker. The first element is considered sorted at first, so the moving marker starts at index 1.
- The algorithm checks the marker element to it's element on left, if it finds an element less than the marker element it swaps. 
    - If it finds an element greater than marker element, then the loop break, marker will increment.
    - The reason for breaking the internal loop is that at any point of time, all elements on LHS are in increasing order among the LHS elements.
-	Towards the end, the whole array is sortd.

---------------
TIME COMPLEXITY
---------------
- Best case O(n) if already been sorted 
- Worst case O(n2) 
- General case tends to O(n2) 
*/

const insertionSort = (arr: number[]) => {
  /*
   i is the marker which we start from 1 as we assume that for first loop, the first element is already sorted. 
   0-(i-1) is the range of LHS array
  */

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }

  return arr;
};

const insertionSortedArray = insertionSort([2, 43, 1, 23, 54, 13, 119, 0]);

console.log(insertionSortedArray);
