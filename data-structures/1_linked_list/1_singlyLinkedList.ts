interface ISingleNode<T> {
  value: T;
  next: null | ISingleNode<T>;
}

class SinglyLinkedList<T> {
  head: ISingleNode<T> | null = null;
  tail: ISingleNode<T> | null = null;

  /**
   *
   * @param value
   * @returns node
   *
   * This generates a new node based on incoming value.
   */
  generateNode(value: T): ISingleNode<T> {
    return {
      value: value,
      next: null,
    };
  }

  /**
   *
   * @param value
   *
   * This appends a new node towards the end based on incoming value.
   */
  append(value: T) {
    const newNode = this.generateNode(value);

    // Happens for the first insertion
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    // When tail exists, it appends towards the last
    this.tail!.next = newNode;
    this.tail = newNode;
  }

  /**
   * Traverses through the linked list
   */
  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  /**
   *
   * @param value
   *
   * This appends node towards the start of list.
   */
  prepend(value: T) {
    const newNode = this.generateNode(value);

    // Happens for the first insertion
    if (!this.head) {
      this.append(value);
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   *
   * @param targetVal - This is the value node after which the below node gets created.
   * @param newValue - THis is the new node that gets inserted after the findVal.
   */
  findAndInsertAfter(targetVal: T, newValue: T) {
    let targetNode: ISingleNode<T> | null;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === targetVal) {
        const newNode = this.generateNode(newValue);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      console.log("Target element is not found");
    }
  }

  /**
   *
   * @param value - Deletes the value
   *
   */
  delete(value: T) {
    //During first iteration, the previous node is null
    let previousNode: ISingleNode<T> | null = null;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        // Case when the current node is the head and no previous node
        if (!previousNode) {
          this.head = currentNode.next;
          return;
        }

        previousNode.next = currentNode.next;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    while (!currentNode) {
      console.log("Target element is not found");
    }
  }
}

const sl = new SinglyLinkedList<number>();

// Append new nodes
sl.append(23);
sl.append(45);

// Prepend
sl.prepend(3);

// Find 23 and insert after 99
sl.findAndInsertAfter(23, 99);

//Delete
sl.delete(3);

//Traverse
sl.traverse();
