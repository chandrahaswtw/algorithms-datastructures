class HashMapBasic {
  bucket: Array<any>;
  size: number = 100;

  constructor() {
    this.bucket = new Array(this.size);
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
    this.bucket[hash] = value;
  }

  get(key: string) {
    const hash = this.hashKey(key);
    return this.bucket[hash];
  }

  delete(key: string) {
    const hash = this.hashKey(key);
    delete this.bucket[hash];
  }

  containsKey(key: string) {
    const hash = this.hashKey(key);
    return this.bucket[hash] !== undefined;
  }
}

const hashmap = new HashMapBasic();
hashmap.set("name", "Hyderabad");
hashmap.set("age", 2000);

console.log(hashmap.get("name"));
console.log(hashmap.containsKey("name"));

hashmap.delete("name");

console.log(hashmap.get("name"));
console.log(hashmap.containsKey("name"));
