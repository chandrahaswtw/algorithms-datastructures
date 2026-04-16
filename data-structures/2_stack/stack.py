class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, value):
        self.items.append(value)
    
    def pop(self):
        return self.items.pop()
    
    def peek(self):
        return self.items[len(self.items) - 1]
    
    def isEmpty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

stack = Stack()
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
print(stack.pop())
print(stack.peek())
print(stack.isEmpty())
print(stack.size())