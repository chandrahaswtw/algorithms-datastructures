const febinocci = (n: number): number => {
  if (n === 0 || n === 1) {
    return 1;
  }
  const feb = febinocci(n - 1) + febinocci(n - 2);
  return feb;
};

console.log(febinocci(5));
