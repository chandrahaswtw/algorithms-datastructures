class Stack<T> {
  items: Array<T> = [];

  push(value: T) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack<number>();

stack.push(2);
stack.push(5);
stack.push(8);

stack.pop();
stack.pop();
stack.pop();

console.log(stack.peek());
console.log(stack.isEmpty());
