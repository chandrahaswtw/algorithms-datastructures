interface INode<T> {
  value: T;
  next: INode<T> | null;
}

class SingleLinkedList<T> {
  head: INode<T> | null = null;

  generateNode(value: T): INode<T> {
    return {
      value,
      next: null,
    };
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  append(value: T) {
    const newNode = this.generateNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    //Append to the last node
    currentNode.next = newNode;
  }

  insertAfter(targetVal: T, newValue: T) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === targetVal) {
        const newNode = this.generateNode(newValue);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  delete(value: T) {
    let prevNode: INode<T> | null = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        // If the node is head
        if (!prevNode) {
          this.head = currentNode.next;
          return;
        }
        prevNode.next = currentNode.next;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
}

const linkedList = new SingleLinkedList();
linkedList.append(5);
linkedList.append(6);
linkedList.append(7);
linkedList.append(8);
// linkedList.traverse();

// linkedList.insertAfter(6, 88);
// linkedList.traverse();

//Removing head
linkedList.delete(5);
//Remove some node in middle
linkedList.delete(7);
linkedList.traverse();
