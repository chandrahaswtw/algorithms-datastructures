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
  BFSTraversal() {}

  deleteNode(value: number) {}

  maxDepth() {}
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
    this.rootNode.BFSTraversal();
  }

  deleteNode(value: number) {
    this.rootNode.deleteNode(value);
  }

  maxDepth() {
    return this.rootNode.maxDepth();
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
//bst.inorderTraversal();
//bst.preOrderTraversal();
bst.postOrderTraversal();
