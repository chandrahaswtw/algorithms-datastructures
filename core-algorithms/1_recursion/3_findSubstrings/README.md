# FIND SUBSTRINGS

## Problem statement

Find all possible substrings from the given string. For example if abc is given, it should return:
abc, ab, ac, bc, a, b, c, ''

## Explanation

Consider the string abc.

We break the problem recursively:

```
abc
a + bc
    b + c
        c + ""
            ""
```

When we reach the empty string (""), we return (Exit condition):

`[""]`

Now, while returning back up the call stack:

At character 'c':
Old result: [""]
New result by prepending 'c': ["c"]
Combined result (preserving old + new):
["", "c"]

At character 'b':
Old result: ["", "c"]
New result by prepending 'b': ["b", "bc"]
Combined result:
["", "c", "b", "bc"]

At character 'a':
Old result: ["", "c", "b", "bc"]
New result by prepending 'a': ["a", "ac", "ab", "abc"]
Final combined result:
["", "c", "b", "bc", "a", "ac", "ab", "abc"]