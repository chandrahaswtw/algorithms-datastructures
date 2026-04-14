import files from "./files.json" with { type: "json" };

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

console.log(fileSearcher(files));
