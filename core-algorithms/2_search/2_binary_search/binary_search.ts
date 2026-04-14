const binarySearch = (
  arr: number[],
  targetNumber: number,
  left = 0,
  right = arr.length - 1,
) => {
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);
  const midElement = arr[mid];

  if (targetNumber === midElement) {
    return mid;
  } else if (targetNumber < midElement) {
    return binarySearch(arr, targetNumber, left, mid - 1);
  } else if (targetNumber > midElement) {
    return binarySearch(arr, targetNumber, mid + 1, right);
  }
};

const binaryPos = binarySearch(
  [1, 2, 55, 244, 432, 789, 1001, 7899, 8002],
  55999,
);

console.log(binaryPos);
