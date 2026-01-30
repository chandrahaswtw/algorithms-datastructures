/*
-----------------
PROBLEM STATEMENT
-----------------

The task is to group together words that are anagrams of each other.
Two words are called anagrams if:
- They contain the same characters
- Each character appears the same number of times
-The order of characters does not matter

Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

Output: 

[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]

-----------
EXPLANATION
-----------

We created a main hashmap that contains all the key value pairs. 
We created key of 26 letters and we have the indices of every alphabet and we store the array if they match the array as below:

{
  "10001000000000000001000000": [ "eat", "tea", "ate" ],
  "10000000000001000001000000": [ "tan", "nat" ],
  "11000000000000000001000000": [ "bat" ]
}
*/

const getAlphaIndex = (letter: string): number => {
  return letter.charCodeAt(0) - "a".charCodeAt(0);
};

const groupAnagrams = (arr: string[]) => {
  const hash: Record<string, string[]> = {};

  for (let str of arr) {
    const hashArr = new Array(26).fill(0);
    for (let i of str) {
      const index: number = getAlphaIndex(i);
      hashArr[index]++;
    }

    const hashIndex = hashArr.join("");
    if (hash[hashIndex]) {
      hash[hashIndex].push(str);
    } else {
      hash[hashIndex] = [str];
    }
  }

  return Object.values(hash);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
