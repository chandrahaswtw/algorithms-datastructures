import math

def merge(listOne, listTwo):
    i = 0
    j = 0
    listMerged = []

    while(i < len(listOne) and j < len(listTwo)):
        if(listOne[i] < listTwo[j]):
            listMerged.append(listOne[i])
            i+=1
        else:
            listMerged.append(listTwo[j])
            j+=1
    
    return [*listMerged, *listOne[i:], *listTwo[j:]]
        

def mergeSort(lis):
    if(len(lis) == 1):
        return lis
    if(len(lis) == 2):
        return sorted(lis)
    
    median = math.floor(len(lis)/2)
    left = mergeSort(lis[0:median])
    right = mergeSort(lis[median:])

    return merge(left, right)


mergeSortedArray = mergeSort([2, 43, 1, 23, 54, 13, 119, 0]);

print(mergeSortedArray);