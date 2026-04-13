# FILE SEARCHER

Collect all the files from the internal folders:
- The files array consists of all the files to be collected.
- This array may exist any deep within the object structure.

```
  {
    documents: {
      files: ["one.ts", "two.ts"],
      name: "Mumbai",
    },
    work: {
      documents: {
        files: ["three.ts", "four.py"],
        folder: {
          files: ["five.ts", "six.py"],
        },
        place: "Ahemdabad",
      },
      folder: {
        project: {
          files: ["seven.js", "eight.py"],
        },
      },
      files: ["nine.php", "ten.php"],
    },
    home: {
      files: ["eleven.js", "twelve.ts"],
    },
    files: ["thirteen.py", "fourteen.php"],
  }
```

The output is 

`['one.ts', 'two.ts', 'three.ts', 'four.py', 'five.ts', 'six.py', 'seven.js', 'eight.py', 'nine.php', 'ten.php', 'eleven.js', 'twelve.ts', 'thirteen.py', 'fourteen.php']`