class Graph {
  adjList: Record<number, Array<number>> = {};
  numberOfNodes: number;
  visited: Array<boolean>;

  constructor(numberOfNodes: number) {
    this.numberOfNodes = numberOfNodes;
    this.visited = new Array(numberOfNodes).fill(false);
    for (let node = 0; node < numberOfNodes; node++) {
      this.adjList[node] = [];
    }
  }

  addEdge(src: number, dest: number) {
    this.adjList[src].push(dest);
  }

  dfsRecursive(node: number) {
    this.visited[node] = true;
    console.log(node);
    for (let n of this.adjList[node]) {
      if (!this.visited[n]) {
        this.dfsRecursive(n);
      }
    }
  }

  dfsIterative(node: number) {
    // Cleaning this from last operation
    this.visited.fill(false);
    let result: Array<number> = [];
    let stack = [node];

    while (stack.length) {
      let s = stack.pop() as number;
      if (!this.visited[s]) {
        this.visited[s] = true;
        result.push(s);
        stack.push(...this.adjList[s]);
      }
    }
    console.log(result);
  }

  bfs(node: number) {
    // Reset from previous traversals
    this.visited.fill(false);

    const queue = [node];
    let result: Array<number> = [];

    while (queue.length) {
      const n = queue.shift() as number;
      if (!this.visited[n]) {
        this.visited[n] = true;
        result.push(n);
        queue.push(...this.adjList[n]);
      }
    }
    console.log(result);
  }
}

const graph = new Graph(12);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 4);
graph.addEdge(1, 3);
graph.addEdge(1, 9);
graph.addEdge(1, 4);
graph.addEdge(1, 6);
graph.addEdge(2, 5);
graph.addEdge(3, 6);
graph.addEdge(4, 1);
graph.addEdge(4, 7);
graph.addEdge(5, 8);
graph.addEdge(7, 10);
graph.addEdge(10, 11);

// console.log(graph.adjList);
// graph.dfsRecursive(0);
// graph.dfsIterative(0);
// graph.bfs(0);
