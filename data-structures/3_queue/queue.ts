class Queue<T> {
  items: Array<T> = [];

  enqueue(value: T) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue<number>();
queue.enqueue(12);
queue.enqueue(24);
queue.enqueue(36);

queue.dequeue();

console.log(queue.peek());
