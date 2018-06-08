Add your answers to the questions below.

1. What is the runtime complexity of your `depthFirstForEach` method?
O(n) - traverses all of the tree. As new nodes get added to the tree, the number of additional times we need to call the depthFirstForEach method increases linearly.

2. What is the space complexity of your `depthFirstForEach` function?
O(n) - regardless of iterative or recursive.

3. What is the runtime complexity of your `breadthFirstForEach` method?
O(n) - goes through all of the nodes

4. What is the space complexity of your `breadthFirstForEach` method? 
O(n) - goes through all of the nodes because every node gets added to the queue data structure. In the worst case scenario, we might have a bunch of nodes in the queue.

5. What is the runtime complexity of your `heapsort` function?
O(nlogn) - the height of a complete binary tree is log(n), to heapify needs to keep comparing parent element with left and right children element and push it down till the parent is larger than both children. During the max heap stage, n/2 elements are being compared, so its n/2log(n) => nlog(n), and as its being sorted it will have the same runtime complexity.

6. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?

- O(n). Space when its sorted is O(1) but then the inserting makes it linear space.

- If the function altered the input array it would be O(1)
