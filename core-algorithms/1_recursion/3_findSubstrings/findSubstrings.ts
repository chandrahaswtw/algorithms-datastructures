const findSubstrings = (str: string): Array<string> => {
  if (!str.length) {
    return [""];
  }

  const firstChar = str.charAt(0);
  const restSubstrings = findSubstrings(str.substring(1));
  const withChar = restSubstrings.map((s) => firstChar + s);
  return [...restSubstrings, ...withChar];
};

console.log(findSubstrings("abc"));
