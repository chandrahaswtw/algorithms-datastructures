# GRAPHS

## Introduction

Unlike trees, graphs are not unidirectional. There is no concept of hierarchy/child-parent relationship etc.

<img src="./images/graph.png" width="500" />

There are 2 kinds of graphs:
-	Directed.
-	Undirected.

## Representing graph in code

### Adjacency matrix

Y-axis represent start of arrow and x-axis represent end of arrow. If there is a connection, we mark as 1 else 0.

<img src="./images/adjDiagram.png" width="500" />

In JS we represent as:

<img src="./images/adjMatrix.png" width="500" />

-	First array represents Node 1 pointing to other 3 nodes and so on. We can access as is.
-	In case of bi-directional array, we mark 1 for both directions. The matrix structure remains the same but the values in it changes.


### Adjacency list

For the same above example, we write an adjacency list as below:

<img src="./images/adjList.png" width="500" />

Key value represents an id of the node etc. And array is of node id’s again.

NOTE: Adjacency lists is a better alternative.

