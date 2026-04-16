class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        newNode = Node(value)
        if(self.head is None):
            self.head = newNode
            return
        
        currentNode = self.head
        while(currentNode.next):
            currentNode = currentNode.next
        
        currentNode.next = newNode
    
    def traverse(self):
        currentNode = self.head
        while(currentNode):
            print(currentNode.value)
            currentNode = currentNode.next

    def insertAfter(self, targetValue, newValue):
        currentNode = self.head
        while(currentNode):
            if(currentNode.value == targetValue):
                newNode = Node(newValue)
                newNode.next = currentNode.next
                currentNode.next = newNode
                return
            currentNode = currentNode.next

    def delete(self, targetValue):
        prevNode = None
        currentNode = self.head
        while(currentNode):
            if(currentNode.value == targetValue ):
                # If target node is head 
                if(prevNode is None):
                    self.head = currentNode.next
                    return
                
                prevNode.next = currentNode.next
                return
            prevNode = currentNode
            currentNode = currentNode.next



ln = LinkedList()
ln.append(5)
ln.append(6)
ln.append(7)
ln.append(8)
ln.insertAfter(6, 88)
ln.delete(8)
ln.traverse()
        
