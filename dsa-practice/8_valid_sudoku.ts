/*
-----------------
PROBLEM STATEMENT
-----------------

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1–9 without repetition.

Each column must contain the digits 1–9 without repetition.

Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1–9 without repetition.

Note:

• A Sudoku board (partially filled) could be valid but is not necessarily solvable.
• Only the filled cells need to be validated according to the mentioned rules.

-----------
EXPLANATION
-----------

We created 3 hashmap arrays each to store the rowHashSet, columnHashSet and cubeHashSet.
 - Each hashSet is an array of 9 objects.
 - For row it has objects of all 9 rows and so on.
It will do a nested loop going through each element per row and fill in the hashsets if any element is repeated.
For rows and columns it's straight forward for for a cube we used the formula ->  Math.floor(r / 3) * 3 + Math.floor(c / 3); with this we go to each cube hashmap and fill the values.

*/

const validSudoku = (arr: Array<Array<string>>) => {
  let rowHashSet: Array<Record<string, boolean>> = Array.from(
    { length: 9 },
    () => ({}),
  );
  let columnHashSet: Array<Record<string, boolean>> = Array.from(
    { length: 9 },
    () => ({}),
  );
  let cubeHashSet: Array<Record<string, boolean>> = Array.from(
    { length: 9 },
    () => ({}),
  );

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (arr[r][c] === ".") {
        continue;
      }

      // Row hashset
      if (rowHashSet[r][arr[r][c]]) {
        return false;
      } else {
        rowHashSet[r][arr[r][c]] = true;
      }

      // Column hashset
      if (columnHashSet[c][arr[r][c]]) {
        return false;
      } else {
        columnHashSet[c][arr[r][c]] = true;
      }

      // Cube hashset
      const cubeNumber = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (cubeHashSet[cubeNumber][arr[r][c]]) {
        return false;
      } else {
        cubeHashSet[cubeNumber][arr[r][c]] = true;
      }
    }
  }

  return true;
};

const matrix = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(validSudoku(matrix));
