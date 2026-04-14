const linearSearch = (arr: number[], targetElement: number) => {
  let pos = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetElement) {
      pos = i + 1;
      break;
    }
  }
  return pos;
};

const linearPos = linearSearch(
  [1, 2, 55, 789, 432, 244, 7899, 8002, 1001],
  8002,
);

console.log(linearPos);
