/*
----------
MERGE SORT
----------

Time complexity O(nlogn) guaranteed!
-	We divide the array into 2 pieces. Until they are reduced to 1 or 2 elements.
-	If array has 2 elements we re-arrange them in ascending order within the array.
-	And then we start to merge. While merging, we make sure that they are merged in ascending order.
-	Merging will happen between 2 arrays which are already in ascending order.

---------------
TIME COMPLEXITY
---------------
O(nlogn) guaranteed!
*/

const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) {
    return arr;
  } else if (arr.length === 2) {
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    return [min, max];
  }

  const center = Math.floor(arr.length / 2);
  const leftArray = mergeSort(arr.slice(0, center));
  const rightArray = mergeSort(arr.slice(center));

  return merge(leftArray, rightArray);
};

const mergeSortedArray = mergeSort([2, 43, 1, 23, 54, 13, 119, 0]);

console.log(mergeSortedArray);
