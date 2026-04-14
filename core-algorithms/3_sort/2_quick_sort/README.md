# QUICK SORT

## Explanation

-	We have a pivot element which can be any element.  Picking the middle element helps avoid O(n^2) on sorted arrays.
-	We split the entire array in 3:
	    Left array which contains all the elements less than the pivot. 
	    Right array which contains all the elements greater than the pivot.
	    Center array which contains the pivot element and all the other elements which are equal to pivot.
-	We in turn split the above array (left and right) into simpler pieces till it’s divided into single element array.
-	Now we merge the elements in the stack and as we come up, we get the full sorted array. 

## Time Complexity

-	Best case: O(nlogn)
-	Worst case: O(n^2), When we perform on sorted array.
-	Avg performance: O(nlogn)