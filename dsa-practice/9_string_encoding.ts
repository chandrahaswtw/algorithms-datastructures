/*
-----------------
PROBLEM STATEMENT
-----------------

Encode and decode strings.

-----------
EXPLANATION
-----------

Say we get the input array as ["abc", "de", "f"]

The encoded string becomes "0011abc0010de0001f"

If we look closely: 
"0011" is 3 from binary to number which is length of "abc" 
"0010" is 2 from binary to number which is length of "de" 
"0001" is 1 from binary to number which is length of "f"

And we append all to make the string encoded.

*/

const encodeString = (arr: Array<string>) => {
  let encodedString = "";

  for (let str of arr) {
    encodedString =
      encodedString + str.length.toString(2).padStart(4, "0") + str;
  }

  return encodedString;
};

const decodeString = (val: string) => {
  let counter = 0;
  let decodedString = "";

  while (counter < val.length) {
    const bin = val.slice(counter, counter + 4);
    counter += 4;
    const len = parseInt(bin, 2);
    decodedString += val.slice(counter, counter + len);
    counter += len;
  }

  return decodedString;
};

console.log(encodeString(["abc", "de", "f"]));
console.log(decodeString("0011abc0010de0001f"));
