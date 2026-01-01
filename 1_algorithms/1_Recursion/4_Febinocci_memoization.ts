const febinocciMemo = (
  n: number,
  memo: Record<number, number> = {}
): number => {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  }

  const feb = febinocciMemo(n - 1, memo) + febinocciMemo(n - 2, memo);
  memo[n] = feb;
  console.log(feb);
  return feb;
};

febinocciMemo(5);
