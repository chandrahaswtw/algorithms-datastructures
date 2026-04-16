class HashMapBasic:
    def __init__(self):
        self.bucketSize = 100
        self.bucket = [None] * self.bucketSize

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
    
    def delete(self, key):
        # We aren't using del or pop() as they remove the element and bucket size decreases
        hash = self.getHash(key)
        self.bucket[hash] = None 
    
    def contains(self, key):
        hash = self.getHash(key)
        return self.bucket[hash] is not None

hashMap = HashMapBasic()
hashMap["name"] = "chandrahas"
hashMap["age"] = 34
print(hashMap["name"], hashMap["age"])
hashMap.delete("name")
print(hashMap["name"])
print(hashMap.contains("name"), hashMap.contains("age"))
