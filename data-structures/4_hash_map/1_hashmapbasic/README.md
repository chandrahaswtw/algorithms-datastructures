# HASH MAP BASIC

- We have a bucket an array of 100.
- We calculate the hash --> We sum up all ASCII of individual key and we return the modulus by dividing with size. 
  - This generates a value between 0 and 100.
  - This value is used a hash