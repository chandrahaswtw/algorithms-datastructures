def findSubstrings(str):
    if(str == ""):
        return [""]
    
    restSubstr = findSubstrings(str[1:])
    return restSubstr + [str[0] + x for x in restSubstr]

print(findSubstrings("abc"))