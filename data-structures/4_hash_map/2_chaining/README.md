# HASH MAP CHAINING

- We have a bucket an array of 100.
- We calculate the hash --> We sum up all ASCII of individual key and we return the modulus by dividing with size. 
  - This generates a value between 0 and 100.
  - If value exists at the index (Hash collision), it will add them in the array. So the array looks like below after hash collisions.
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