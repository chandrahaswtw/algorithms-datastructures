def bubbleSort(lis):
    for i in range(len(lis)):
         for j in range(i + 1, len(lis)):
              if(lis[i] > lis[j]):
                   temp = lis[i]
                   lis[i] = lis[j]
                   lis[j] = temp
    
    return lis


bubbleSortedLis = bubbleSort([2, 43, 1, 23, 54, 13, 119, 0]);

print(bubbleSortedLis);