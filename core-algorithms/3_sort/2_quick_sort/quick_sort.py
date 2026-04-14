import math
def quickSort(lis):

    if(len(lis) <= 1):
        return lis

    medianElement = lis[math.floor(len(lis)/2)]
    leftList = list(filter(lambda x : x < medianElement, lis))
    middleList = list(filter(lambda x : x == medianElement, lis))
    rightList = list(filter(lambda x : x > medianElement, lis))
    return [*quickSort(leftList), *middleList, *quickSort(rightList)]
    

quickSortedArray = quickSort([2, 43, 1, 23, 54, 13, 119, 0]);

print(quickSortedArray);