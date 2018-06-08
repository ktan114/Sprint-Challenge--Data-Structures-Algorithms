Add your answers to the questions below.

1. What is the runtime complexity of your `depthFirstForEach` method?
O(n)

2. What is the space complexity of your `depthFirstForEach` function?
O(d) - based on the depth

3. What is the runtime complexity of your `breadthFirstForEach` method?
O(n) 

4. What is the space complexity of your `breadthFirstForEach` method? 
O(v) - goes through all of the nodes

5. What is the runtime complexity of your `heapsort` function?
O(nlogn) - the height of a complete binary tree is log(n), to heapify needs to keep comparing parent element with left and right children element and push it down till the parent is larger than both children. During the max heap stage, n/2 elements are being compared, so its n/2log(n) => nlog(n), and as its being sorted it will have the same runtime complexity.

6. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?
O(1) because the space doesn't change, just rearranged.

- If the function altered the input array it would be O(n)
