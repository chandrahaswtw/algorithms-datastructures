/*
-------------
FILE SEARCHER
-------------

Collect all the files from the internal folders:
    -   The files array consists of all the files to be collected.
    -   This array may exist any deep within the object structure.

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
*/

const fileSearcher = (data: any, files: string[] = []) => {
  if (!data || typeof data !== "object") return files;

  for (let i in data) {
    if (i === "files" && Array.isArray(data[i])) {
      files.push(...data[i]);
    } else {
      files = fileSearcher(data[i], files);
    }
  }

  return files;
};

const searchObject = {
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
};

console.log(fileSearcher(searchObject));
