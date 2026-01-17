/*
-----------------
Problem statement
-----------------

Find out if 2 strings passed are anagrams:

Some examples of anagrams:

"listen" <--> "silent" 
"earth" <--> "heart" 
"a gentleman" <--> "elegant man"

-----------
Explanation
-----------

- To check whether two strings are anagrams, we first make sure both strings have the same length. If they don’t, they cannot be anagrams.
- Next, we create a list of 26 numbers, each representing one letter of the English alphabet from a to z, all initially set to zero.
- We then go through both strings character by character at the same time.
- For each position:
    - We increase the count for the letter from the first string.
    - We decrease the count for the letter from the second string.
- This way, letters from the first string add to the count, and matching letters from the second string cancel them out.
- After processing all characters, we check the list:
    - If every value is zero, it means both strings contain the same letters in the same quantity, so they are anagrams.
    - If any value is not zero, it means the strings differ in at least one letter, so they are not anagrams.
*/

const getAlphaIndex = (letter: string): number => {
  return letter.charCodeAt(0) - "a".charCodeAt(0);
};

const anagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  const alphabets = new Array(26).fill(0);
  for (let i = 0; i < str1.length; i++) {
    alphabets[getAlphaIndex(str1[i])]++;
    alphabets[getAlphaIndex(str2[i])]--;
  }

  for (let i of alphabets) {
    if (i !== 0) {
      return false;
    }
  }

  return true;
};

console.log(anagram("listen", "silent"));
