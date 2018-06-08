const heapsort = (arr) => {
  /* Your code here */
  const heap = new Heap(); // initialize a heap
  // console.log(arr)
  arr.map(item => {
    heap.insert(item) // Adds the items in the array to the heap
  })
  // console.log(heap)
  let temp = 0; 
  const newHeap = [];
  while (heap.getSize() > 0) { // .getSize() or use heap.storage.length
    temp = heap.delete(); // Begins to remove last item from array
    newHeap.unshift(temp) // Inserts the value to beginning of array
  }
  // console.log(newHeap)
  return newHeap;
};


class Heap {
  constructor() {
    this.storage = [];
  }

  insert(val) {
    const index = this.storage.push(val) - 1;
    this.bubbleUp(index);
  }

  delete() {
    if (!this.storage.length) return null;
    if (this.storage.length === 1) {
      return this.storage.pop();
    }

    const max = this.storage[0];
    this.storage[0] = this.storage.pop();
    this.siftDown(0);
    return max;
  }

  getMax() {
    return this.storage[0];
  }

  getSize() {
    return this.storage.length;
  }

  bubbleUp(index) {
    const parent = Math.floor((index - 1) / 2);
    if (this.storage[parent] < this.storage[index]) {
      [this.storage[parent], this.storage[index]] = [this.storage[index], this.storage[parent]];
      this.bubbleUp(parent);
    }
  }

  siftDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let maxChild;
    
    if (this.storage[leftChildIndex] && this.storage[rightChildIndex]) {
      maxChild = this.storage[leftChildIndex] > this.storage[rightChildIndex] ? leftChildIndex : rightChildIndex;
    } else if (this.storage[leftChildIndex]) {
      maxChild = leftChildIndex;
    } else if (this.storage[rightChildIndex]) {
      maxChild = rightChildIndex;
    } 

    if (this.storage[index] < this.storage[maxChild]) {
      [this.storage[maxChild], this.storage[index]] = [this.storage[index], this.storage[maxChild]];
      this.siftDown(maxChild);
    }
  }
}

module.exports = {
  Heap,
  heapsort,
};
