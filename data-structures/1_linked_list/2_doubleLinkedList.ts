interface IDoubleNode<T> {
  prev: null | IDoubleNode<T>;
  value: T;
  next: null | IDoubleNode<T>;
}

class DoubleLinkedList<T> {
  head: IDoubleNode<T> | null = null;
  tail: IDoubleNode<T> | null = null;

  /**
   *
   * @param value
   * @returns node
   *
   * This generates a new node based on incoming value.
   */
  generateNode(value: T): IDoubleNode<T> {
    return {
      prev: null,
      value: value,
      next: null,
    };
  }

  append(value: T) {
    const newNode = this.generateNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail!.next = newNode;
    newNode.prev = this.tail;
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
    if (!this.head) {
      this.append(value);
      return;
    }

    const newNode = this.generateNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  /**
   *
   * @param targetVal - This is the value node after which the below node gets created.
   * @param newValue - THis is the new node that gets inserted after the findVal.
   */
  findAndInsertAfter(targetVal: T, newValue: T) {
    let current = this.head;

    while (current) {
      if (current.value === targetVal) {
        const newNode = this.generateNode(newValue);
        newNode.prev = current;

        // We are checking if next is actually present is present
        if (current.next) {
          newNode.next = current.next;
          current.next.prev = newNode;
        }
        current.next = newNode;
      }
      current = current.next;
    }

    if (!current) {
      console.log("Target element is not found");
    }
  }

  /**
   *
   * @param value - Deletes the value
   *
   */
  delete(value: T) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (!current.prev) {
          // This is the head
          this.head = current.next;
        } else {
          current.prev.next = current.next;
        }
        if (!current.next) {
          //This is tail
          this.tail = current.prev;
        } else {
          current.next.prev = current.prev;
        }
        return;
      }
      current = current.next;
    }

    if (!current) {
      console.log("Target element is not found");
    }
  }
}

const dl = new DoubleLinkedList<number>();

// Append new nodes
dl.append(23);
dl.append(46);
dl.append(200);

// Prepend
dl.prepend(999);

// Find and Insert after
dl.findAndInsertAfter(46, 844);

//Delete
dl.delete(23);

// Traverse
dl.traverse();
