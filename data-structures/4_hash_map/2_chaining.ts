/*
- We have a bucket an array of 100.
- We calculate the hash --> We sum up all ASCII of individual key and we return the modulus by dividing with size. 
  - This generates a value between 0 and 100.
  - This 
*/

interface IHash {
  key: string;
  value: any;
}

class Chaining {
  bucket: Array<Array<IHash>>;
  size: number = 5;

  constructor() {
    this.bucket = new Array(this.size).fill(null).map(() => []);
  }

  hashKey(key: string) {
    let hash = 0;
    for (let i of key) {
      hash += i.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key: string, value: any) {
    const hash = this.hashKey(key);
    const existingHash = this.bucket[hash].find((el) => el.key === key);
    if (existingHash) {
      existingHash.value = value;
    } else {
      this.bucket[hash].push({ key, value });
    }
  }

  get(key: string) {
    const hash = this.hashKey(key);
    const existingHash = this.bucket[hash].find((el) => el.key === key);
    return existingHash?.value;
  }

  delete(key: string) {
    const hash = this.hashKey(key);
    const index = this.bucket[hash].findIndex((el) => el.key === key);
    if (index != -1) {
      this.bucket[hash].splice(index, 1);
    } else {
      console.log("The key is not found");
    }
  }

  containsKey(key: string) {
    const hash = this.hashKey(key);
    return this.bucket[hash].find((el) => el.key === key) !== undefined;
  }
}

const hashmapChaining = new Chaining();
hashmapChaining.set("name", "Chandrahas");
hashmapChaining.set("age", 34);
hashmapChaining.set("place", "Hyderabad");
hashmapChaining.set("sex", "Male");
hashmapChaining.set("Country", "India");
hashmapChaining.set("IsMarried", true);

console.log(hashmapChaining.get("name"));
console.log(hashmapChaining.containsKey("name"));

hashmapChaining.delete("name");

console.log(hashmapChaining.get("name"));
console.log(hashmapChaining.containsKey("name"));
