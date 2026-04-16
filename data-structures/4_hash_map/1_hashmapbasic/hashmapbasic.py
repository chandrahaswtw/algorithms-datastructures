class HashMapBasic:
    def __init__(self):
        self.bucket = [None] * 100

    # Generate hash
    def getHash(self,key):
        asciiTot = 0
        for alpha in key:
            asciiTot+= ord(alpha)
        return asciiTot % len(self.bucket)
    
    def __setitem__(self, key, value):
        hash = self.getHash(key)
        self.bucket[hash] = value

    def __getitem__(self, key):
        hash = self.getHash(key)
        return self.bucket[hash]
    

hashMap = HashMapBasic()
hashMap["name"] = "chandrahas"
hashMap["age"] = 34

print(hashMap["name"], hashMap["age"])
