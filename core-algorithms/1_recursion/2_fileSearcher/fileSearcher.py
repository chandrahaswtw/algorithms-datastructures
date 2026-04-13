import json

with open("./files.json", mode="r") as f:
    files = json.load(f)

def fileSearcher(fs, allFiles = []):

    if(not isinstance(fs, dict)):
        return
    
    for key, value in fs.items():
        if(key == "files"):
            allFiles.extend(value)
        else:
            fileSearcher(value, allFiles)
    
    return allFiles

print(fileSearcher(files))