class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;
  parent: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  addNode(value: number): BSTNode | undefined {
    if (value < this.value) {
      if (this.left) {
        return this.left.addNode(value);
      }
      const newNode = new BSTNode(value);
      this.left = newNode;
      newNode.parent = this;
    } else {
      if (this.right) {
        return this.right.addNode(value);
      }
      const newNode = new BSTNode(value);
      this.right = newNode;
      newNode.parent = this;
    }
  }
  // Left → Root → Right
  inOrderTraversal(node: BSTNode = this) {
    node.left && this.inOrderTraversal(node.left);
    console.log(node.value);
    node.right && this.inOrderTraversal(node.right);
  }

  // Root → Left → Right
  preOrderTraversal(node: BSTNode = this) {
    console.log(node.value);
    node.left && this.preOrderTraversal(node.left);
    node.right && this.preOrderTraversal(node.right);
  }

  // Left → Right → Root
  postOrderTraversal(node: BSTNode = this) {
    node.left && this.postOrderTraversal(node.left);
    node.right && this.postOrderTraversal(node.right);
    console.log(node.value);
  }

  // BFS
  BFSTraversal() {
    let result: Array<number> = [];
    let queue = [this as BSTNode];
    while (queue.length > 0) {
      let targetNode = queue.shift();
      if (targetNode) {
        result.push(targetNode.value);
        targetNode.left && queue.push(targetNode.left);
        targetNode.right && queue.push(targetNode.right);
      }
    }
    return result;
  }
}

const node = new BSTNode(10);

node.addNode(5);
node.addNode(14);
node.addNode(2);
node.addNode(6);
node.addNode(24);

// node.inOrderTraversal();
// node.preOrderTraversal();
// node.postOrderTraversal();
console.log(node.BFSTraversal());
