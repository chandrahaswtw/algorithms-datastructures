class Chaining:
    def __init__(self):
        self.bucketSize = 5
        self.bucket = [[] for _ in range(self.bucketSize)]

    # Generate hash
    def getHash(self,key):
        asciiTot = 0
        for alpha in key:
            asciiTot+= ord(alpha)
        return asciiTot % len(self.bucket)
    
    def __setitem__(self, key, value):
        hash = self.getHash(key)
        existingElement = next((element for element in self.bucket[hash] if key in element), None)
        if(existingElement):
            existingElement[key] = value
        else:
            self.bucket[hash].append({key : value})

    def __getitem__(self, key):
        hash = self.getHash(key)
        return next((element[key] for element in self.bucket[hash] if key in element), None)
    
    def delete(self, key):
        # We aren't using del or pop() as they remove the element and bucket size decreases
        hash = self.getHash(key)
        self.bucket[hash] = [element for element in self.bucket[hash] if key not in element]
    
    def contains(self, key):
        hash = self.getHash(key)
        return self.bucket[hash] is not None

hashMap = Chaining()
hashMap["name"] = "chandrahas"
hashMap["age"] = 34
hashMap["place"] = "Hyderabad"
hashMap["sex"] = "Male"
hashMap["country"] = "India"
hashMap["isMarried"] = False

print(hashMap.bucket)
hashMap.delete("name")
hashMap.delete("age")
print(hashMap.bucket)
