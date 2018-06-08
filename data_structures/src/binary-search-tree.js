  class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    /* Your code here */
    const depthFirst = (node) => {
      cb(node.value) // Add root value first
      if(node.left !== null) depthFirst(node.left) // Checks left side of node
      if(node.right !== null) depthFirst(node.right) // Checks right side of node
    }
    depthFirst(this);
  }

  breadthFirstForEach(cb) {
    /* Your code here */
    const queue = []; // Create a queue
    queue.push(this); // Pushes in the root + first level
    while (queue.length !== 0) {
      let node = queue.shift(); // As it shifts it contains root, left, right, 2nd level left, 2nd level right, etc.
      cb(node.value) // Add the values as each node gets shifted
      if (node.left !== null) queue.push(node.left) // Checks left side of node
      if (node.right !== null) queue.push(node.right) // Checks right side of node
    }
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;