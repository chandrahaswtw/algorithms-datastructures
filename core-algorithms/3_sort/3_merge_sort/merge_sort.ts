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
