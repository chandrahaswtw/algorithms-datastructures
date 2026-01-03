/*
-------------
BUBBLE SORT
-------------

- In bubble sort, it takes first element, checks with remaining all elements and swaps if necessary and it repeats the process by considering next element. 
- After going through the entire list once, the largest number will have "bubbled" up to the end of the list.

---------------
TIME COMPLEXITY
---------------

- Best case O(n2) if already been sorted 
- Worst case O(n2) 
- General case tends to O(n2) 
*/

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i; j <= arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const bubbleSortedArray = bubbleSort([2, 43, 1, 23, 54, 13, 119, 0]);

console.log(bubbleSortedArray);
