/*
-----------------
PROBLEM STATEMENT
-----------------

Checks if a word is palindrome or not. Ignore the special charecters, spaces.

-----------
EXPLANATION
-----------

Keep a left and right pointer, start moving from both ends by comparing.

*/

const validPalindrome = (str: string) => {
  // This removes all non alpha numeric charectres and spaces. Converts all to lower case.
  str = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(validPalindrome("A man, A plan, A canal:Panama"));
