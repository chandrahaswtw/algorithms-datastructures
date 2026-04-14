import math

def binarySearch(lis, target, left = 0, right = None):
    if(right is None):
        right = len(lis) - 1
    
    if(left > right):
        return -1
    
    median = math.floor((left + right)/2)
    if(lis[median] == target):
        return median
    elif(lis[median] > target):
        return binarySearch(lis, target, left, median - 1)
    else:
        return binarySearch(lis, target, median + 1, right)

binaryPos = binarySearch(
  [1, 2, 55, 244, 432, 789, 1001, 7899, 8002],
  78990,
);

print(binaryPos);