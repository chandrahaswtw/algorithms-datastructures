# class node:
#     def __init__(self, value):
#        self.value = value
#        self.left = None
#        self.right = None
#        self.parent = None

class BST:
    def __init__(self, value):
       self.value = value
       self.left = None
       self.right = None
       self.parent = None
    
    def addNode(self, value):
        if(value < self.value):
            if(self.left):
                return self.left.addNode(value)
            newNode = BST(value)
            self.left = newNode
            newNode.parent = self
        else:
            if(self.right):
                return self.right.addNode(value)
            newNode = BST(value)
            self.right = newNode
            newNode.parent = self
    
    # Left → Root → Right
    def inOrderTraversal(self):
        if(self.left):
            self.left.inOrderTraversal()
        print(self.value)
        if(self.right):
            self.right.inOrderTraversal()

    # Root → Left → Right
    def preOrderTraversal(self):
        print(self.value)
        if(self.left):
            self.left.inOrderTraversal()
        if(self.right):
            self.right.inOrderTraversal()

    # Left → Right → Root
    def postOrderTraversal(self):
        if(self.left):
            self.left.inOrderTraversal()
        if(self.right):
            self.right.inOrderTraversal()
        print(self.value)
    
    def BFSTraversal(self):
        result = []
        queue = [self]
        while(len(queue)):
            targetNode = queue.pop(0)
            result.append(targetNode.value)
            if(targetNode.left):
                queue.append(targetNode.left)
            if(targetNode.right):
                queue.append(targetNode.right)
        return result




node = BST(10)

node.addNode(5)
node.addNode(14)
node.addNode(2)
node.addNode(6)
node.addNode(24)

# node.inOrderTraversal()
# node.preOrderTraversal()
# node.postOrderTraversal()

print(node.BFSTraversal())


