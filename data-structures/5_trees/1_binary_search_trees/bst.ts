class BSNode {
  value: number | null;
  left: BSNode | null;
  right: BSNode | null;
  parent: BSNode | null;

  constructor(value: number | null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  addNode(value: number): any {
    if (!this.value) {
      this.value = value;
      return;
    }

    if (value < this.value) {
      if (this.left) {
        return this.left.addNode(value);
      } else {
        const newNode = new BSNode(value);
        newNode.parent = this;
        this.left = newNode;
        return;
      }
    } else {
      if (this.right) {
        return this.right.addNode(value);
      } else {
        const newNode = new BSNode(value);
        newNode.parent = this;
        this.right = newNode;
        return;
      }
    }
  }

  // DFS Left → Root → Right
  inorderTraversal(node: BSNode | null) {
    if (!node) {
      return;
    }

    node.inorderTraversal(node.left);
    console.log(node.value);
    node.inorderTraversal(node.right);
  }

  // DFS Root → Left → Right
  preOrderTraversal(node: BSNode | null) {
    if (!node) {
      return;
    }

    console.log(node.value);
    node.preOrderTraversal(node.left);
    node.preOrderTraversal(node.right);
  }

  // DFS Left → Right → Root
  postOrderTraversal(node: BSNode | null) {
    if (!node) {
      return;
    }

    node.postOrderTraversal(node.left);
    node.postOrderTraversal(node.right);
    console.log(node.value);
  }

  // BFS
  BFSTraversal(node: BSNode | null) {
    if (!node) {
      return;
    }

    const result: Array<number | null> = [];
    const queue: Array<BSNode> = [node];

    while (queue.length > 0) {
      const singleNode = queue.shift()!;
      result.push(singleNode.value);

      singleNode.left && queue.push(singleNode.left);
      singleNode.right && queue.push(singleNode.right);
    }

    return result;
  }

  getRightSubMinimumNode(node: BSNode): BSNode | undefined {
    if (!node.right && !node.left) {
      return node;
    }

    if (node.left) {
      return this.getRightSubMinimumNode(node.left);
    }
  }

  deleteNode(value: number, node: BSNode = this) {
    if (!node) {
      return null;
    }

    if (node.left && value < node.value!) {
      node.left = this.deleteNode(value, node.left);
    } else if (node.right && value > node.value!) {
      node.right = this.deleteNode(value, node.right);
    } else {
      // If no child
      if (!node.left && !node.right) {
        return null;
      }

      //If one child
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      //If both children
      const rightSubMinimumNode = this.getRightSubMinimumNode(node.right)!;
      node.value = rightSubMinimumNode.value!;
      node.right = this.deleteNode(rightSubMinimumNode.value!, node.right);
    }

    return node;
  }

  maxDepth(node: BSNode, depth = 0): number {
    if (!node) {
      return 0;
    }

    if (!node.right && !node.left) {
      return depth;
    }

    if (node.left && node.right) {
      return Math.max(
        this.maxDepth(node.left, depth + 1),
        this.maxDepth(node.right, depth + 1)
      );
    } else if (node.left) {
      return this.maxDepth(node.left, depth + 1);
    } else if (node.right) {
      return this.maxDepth(node.right, depth + 1);
    }
  }
}

class BST {
  rootNode: BSNode;

  constructor() {
    this.rootNode = new BSNode(null);
  }

  addNode(value: number) {
    this.rootNode.addNode(value);
  }

  inorderTraversal() {
    this.rootNode.inorderTraversal(this.rootNode);
  }

  preOrderTraversal() {
    this.rootNode.preOrderTraversal(this.rootNode);
  }

  postOrderTraversal() {
    this.rootNode.postOrderTraversal(this.rootNode);
  }

  BFSTraversal() {
    return this.rootNode.BFSTraversal(this.rootNode);
  }

  deleteNode(value: number) {
    this.rootNode.deleteNode(value);
  }

  maxDepth() {
    return this.rootNode.maxDepth(this.rootNode);
  }
}

const bst = new BST();

// Add nodes
bst.addNode(10);
bst.addNode(5);
bst.addNode(14);
bst.addNode(2);
bst.addNode(6);
bst.addNode(24);

// Traverse nodes
// bst.inorderTraversal();
//bst.preOrderTraversal();
// bst.postOrderTraversal();
// bst.deleteNode(5);
// bst.inorderTraversal();

console.log(bst.maxDepth());
