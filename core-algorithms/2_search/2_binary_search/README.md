# BINARY SEARCH

## Explanation

This requires the array to be sorted. This is how binary search goes:
-	It immediately goes to the center of the array. Say the element is greater than the middle element, it discards the LHS and again divides the RHS into 2 halves and choose the better half and starts the search again.
-	If the element is smaller than the middle element, it chooses the left LHS and discards the RHS
-	The process goes on until if finds the element

NOTE: Hence it helps to find the element much faster than the linear search, but the array needs to be sorted. This consumes some time. 

## Time complexity

Best case: O(1) if we find the element in middle.
Worst case: O(log n) if we are looking in the beginning or end. 
General case: Tends to O(log n) if the element is elsewhere.
