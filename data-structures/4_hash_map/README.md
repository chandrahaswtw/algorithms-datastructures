# Hash Map (Hash Table)

## Overview

A **Hash Map** is a data structure that stores data in **key-value pairs**.  
It uses a **hash function** to compute an index where the value is stored.

Hash maps provide **fast access** to data based on keys.

---

## Key Characteristics

- Stores data as **key-value pairs**
- Uses a **hash function** for indexing
- Average constant-time operations
- Keys are unique

---

## Basic Operations

| Operation | Description |
|---------|-------------|
| Put / Insert | Adds or updates a key-value pair |
| Get | Retrieves the value for a given key |
| Remove | Deletes a key-value pair |
| ContainsKey | Checks if a key exists |
| Size | Returns number of entries |

---

## Hash Function

A **hash function**:
- Converts a key into an integer index
- Should distribute keys uniformly
- Minimizes collisions

Good hash functions improve performance.

---

## Time Complexity (Average Case)

| Operation | Time Complexity |
|---------|----------------|
| Insert | O(1) |
| Get | O(1) |
| Delete | O(1) |

## Advantages

- Extremely fast lookups
- Flexible key types
- Scales well with large datasets

---

## Limitations

- No guaranteed ordering
- Poor hash functions degrade performance
- Uses extra memory


## Hash collisions

Collision happens when two different keys produce the same hash key. In that case the new key value replaces the old key value. Say if the bucket size is just less, then we can see more collisions. These below are techniques that help to eradicate the collisions.

### Chaining
In chaining, we have a block of array of arrays. If we get the same hash (the index in the block), we push the key value pair into the same index. And while retrieving, we look into the index, search for the corresponding array element and fetch the key value pairs.
```
[
  [],
  [
    { key: "age", value: 34 },
    { key: "sex", value: "Male" },
    { key: "Country", value: "India" },
    { key: "IsMarried", value: true }
  ],
  [
    { key: "name", value: "Chandrahas" },
    { key: "place", value: "Hyderabad" }
  ],
  [],
  []
]
```

### Open addressing
Open addressing is a collision resolution technique used in hash maps (hash tables) where all key–value pairs are stored directly in the hash table array itself. When a collision occurs (i.e., two keys hash to the same index), the algorithm probes other slots in the array according to a predefined probing strategy until an empty slot is found.

Unlike separate chaining, open addressing does not use linked lists or secondary data structures. This makes it memory-efficient but requires careful handling of collisions, deletions, and table resizing.