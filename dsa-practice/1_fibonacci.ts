/*
-----------------
PROBLEM STATEMENT
-----------------

Generate the Fibonacci series up to N numbers. The number of fibonacci required are given as input.

Fibonacci Definition:
The Fibonacci series is a sequence where each number is the sum of the previous two numbers.

Sequence:
0, 1, 1, 2, 3, 5, 8, 13, ...

-----------
EXPLANATION
-----------

* The first number is always 0
* The second number is always 1
* Every number after that is calculated as:
  fib[i] = fib[i - 1] + fib[i - 2]
*/

const fibonacci = (num: number) => {
  var febi = new Array(num).fill(null);

  febi[0] = 0;
  febi[1] = 1;
  for (let i = 2; i < num; i++) {
    febi[i] = febi[i - 1] + febi[i - 2];
  }
  return febi;
};

console.log(fibonacci(10));
