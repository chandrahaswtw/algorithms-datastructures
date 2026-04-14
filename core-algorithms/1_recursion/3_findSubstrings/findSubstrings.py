def findSubstrings(str):
    if(str == ""):
        return [""]
    
    firstChar = str[0]
    restSubstr = findSubstrings(str[1:])
    withChar = list(map(lambda x: firstChar + x, restSubstr))
    return restSubstr + withChar

print(findSubstrings("abc"))