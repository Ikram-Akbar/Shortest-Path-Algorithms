
## **Project Overview**

This project is a **Graph Visualizer** that uses the **Floyd-Warshall** algorithm to compute the shortest path between two users in a graph. The graph consists of a set of users (nodes) and the connections (edges) between them. This project provides an interactive interface where users can:

* Set the number of users (nodes) in the graph.
* Define connections between pairs of users (edges).
* Visualize the adjacency matrix representing the graph.
* Find the shortest path between two users using the **Floyd-Warshall** algorithm.

### **Key Features**

1. **Graph Initialization** : Users can set the number of nodes (users) in the graph, and the graph is dynamically initialized as an adjacency matrix.
2. **Adding Connections** : Users can define undirected connections between pairs of users. Each connection is represented as an edge in the graph.
3. **Adjacency Matrix Visualization** : The graph is displayed as an adjacency matrix, where each cell indicates the presence of a direct connection between two users (with `1` representing a connection and `∞` representing no connection).
4. **Shortest Path Calculation** : After defining the graph, users can input two users, and the shortest path between them is computed using the **Floyd-Warshall** algorithm.
5. **Results Display** : The results include the shortest path (as a sequence of users) and the shortest distance (the weight of the path, if any).

### **Technologies Used**

* **React** for building the frontend user interface.
* **React-Bootstrap** for UI components (buttons, forms, tables, alerts, etc.).
* **Floyd-Warshall Algorithm** implemented to compute the shortest paths.

### **Floyd-Warshall Algorithm**

The **Floyd-Warshall** algorithm is used to find the shortest paths between all pairs of nodes in a graph. It works by iteratively updating a matrix of shortest distances between all nodes. The result is a matrix that indicates the shortest distance between any two nodes in the graph.

#### Key Steps:

1. **Graph Initialization** : Create an adjacency matrix where cells indicate the distance between nodes. Initially, direct connections are set to `1`, and non-connected nodes are set to `∞` (infinity).
2. **Algorithm Execution** : The algorithm iteratively updates the distance between all pairs of nodes by considering intermediate nodes.
3. **Result Extraction** : After running the algorithm, the matrix is updated with the shortest paths, and the user can retrieve the path and distance between any two users.

---

## **Component Breakdown**

### **1. GraphVisualizer Component**

The main component that manages the entire graph setup and visualization. It contains the logic for:

* **Graph creation and management** (initialize and update adjacency matrix).
* **User input handling** (set the number of users and define connections).
* **Floyd-Warshall algorithm execution** (compute the shortest path).
* **UI elements** (input forms, tables, buttons).

#### **State Variables:**

* `n`: The number of users (nodes).
* `connections`: List of connections between users (each connection has `user1` and `user2`).
* `graph`: The adjacency matrix representing the graph.
* `shortestPathInfo`: Stores the result of the shortest path query, including path and distance.
* `user1`, `user2`: The two users selected for the shortest path query.

#### **Main Methods:**

* **createEmptyGraph(size)** : Initializes a graph (adjacency matrix) of a given size with `∞` (Infinity) as default values, except for the diagonal which is `0` (self-connections).
* **handleUserInput(e)** : Updates the number of users and re-initializes the graph.
* **handleConnectionChange(index, e)** : Updates a specific connection (user1, user2) in the `connections` array.
* **handleAddConnection()** : Adds a new connection to the list of connections.
* **initializeGraph()** : Converts the `connections` array into an adjacency matrix representing the graph.
* **handleFindShortestPath()** : Runs the Floyd-Warshall algorithm and displays the shortest path and distance between `user1` and `user2`.
* **getPath(next, u, v)** : Retrieves the shortest path from `user1` to `user2` based on the `next` matrix returned by the Floyd-Warshall algorithm.

### **2. UI Elements**

The UI uses **React-Bootstrap** for design elements and layout:

* **Form Controls** : For setting the number of users, adding connections, and selecting `user1` and `user2` for the shortest path.
* **Button Components** : To trigger the addition of connections and calculation of the shortest path.
* **Table** : To display the adjacency matrix representing the graph.
* **Alert** : To show the results of the shortest path calculation.

---

## **How the Project Works**

### **Step 1: Set the Number of Users**

* The user starts by entering the number of users (nodes) in the graph. This creates a graph of size `n x n`.

### **Step 2: Define Connections**

* Users define connections between pairs of users. For each connection, the user enters two user IDs (e.g., `1` and `2`) to specify that there is an edge between `User 1` and `User 2`.

### **Step 3: Visualize the Graph**

* The graph is displayed as an adjacency matrix, showing the connections between users. If two users are connected, the cell shows `1`; otherwise, it shows `∞`.

### **Step 4: Find Shortest Path**

* The user selects two users (`user1` and `user2`) and clicks the "Find Shortest Path" button. The **Floyd-Warshall** algorithm is then executed to calculate the shortest path between these two users.
* The result is displayed, showing the path (as a sequence of users) and the total distance (number of edges in the path).

---

## **Possible Extensions**

1. **Directed Graphs** : Currently, the graph is undirected. You can extend it to support directed graphs by modifying the way connections are added (only one direction instead of both).
2. **Edge Weights** : You could extend the project to support weighted edges instead of just using `1` for each connection. This would involve allowing users to specify edge weights when adding connections.
3. **More Algorithms** : Implement other graph algorithms like Dijkstra’s Algorithm, BFS, or DFS for exploring paths and connections.
4. **User Interface Improvements** : Enhance the UI by adding better styling, tooltips, and more interactive visualizations, such as dynamically showing the graph as edges are added.
5. **Data Persistence** : Store the graph data and user selections in local storage or a backend to persist between sessions.

---

## **Conclusion**

This project demonstrates a practical application of graph theory and algorithms in a React-based web application. The core functionality — finding the shortest path using the **Floyd-Warshall** algorithm — is implemented in an interactive UI that allows users to define and explore their graph.

This project serves as a foundation for learning graph algorithms and can be extended with more complex features like weighted edges, directed graphs, and other pathfinding algorithms.
