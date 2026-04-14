const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  // Picking the middle element helps avoid O(n^2) on sorted arrays
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const lhs = arr.filter((val) => val < pivot);
  const middle = arr.filter((val) => val === pivot);
  const rhs = arr.filter((val) => val > pivot);

  return [...quickSort(lhs), ...middle, ...quickSort(rhs)];
};

const quickSortedArray = quickSort([2, 43, 1, 23, 54, 13, 119, 0]);

console.log(quickSortedArray);
