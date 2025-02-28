# 📚 Data Structures in JavaScript  

This document provides an overview of fundamental data structures used in JavaScript, along with their descriptions, use cases, advantages, and disadvantages.  

## 🏗️ 1. Arrays  
### Description  
An `Array` is a data structure that stores elements sequentially in memory and allows access via indexes. JavaScript arrays are dynamic, meaning they can grow or shrink in size and store elements of different types.

### Use Cases  
- Storing lists of data (e.g., a list of users, products, or messages)  
- Implementing other data structures (e.g., stacks, queues)  
- Iterating over collections using loops and array methods  

### Advantages  
✔️ Fast random access using indexes (O(1))  
✔️ Built-in high-level methods (`map`, `filter`, `reduce`, etc.)  
✔️ Can store different data types  

### Disadvantages  
❌ Costly insertions and deletions in the middle (O(n))  
❌ Requires contiguous memory allocation

### 🔢 Array Operations and Time Complexity  
| Operation           | Example             | Time Complexity |
|---------------------|---------------------|----------------|
| Access by index    | `arr[i]`            | **O(1)**       |
| Insert at the end  | `arr.push(value)`   | **O(1) / O(n)** |
| Remove from end    | `arr.pop()`         | **O(1)**       |
| Insert at start    | `arr.unshift(value)` | **O(n)**       |
| Remove from start  | `arr.shift()`       | **O(n)**       |
| Insert in middle   | `arr.splice(i, 0, value)` | **O(n)** |
| Remove from middle | `arr.splice(i, 1)`  | **O(n)**       |
| Copy array         | `arr.slice()`       | **O(n)**       |

### Examples
[Arrays examples](arrays.js)  
[Arrays methods(!!!! add file with all methods)]()

---

## 🔗 2. Linked List  
### Description  
A `Linked List` is a sequential data structure where each element (node) contains a value and a reference (pointer) to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory allocation.  

A linked list is a fundamental data structure in computer science. It mainly allows efficient insertion and deletion operations compared to [arrays](#️-1-arrays). Like arrays, it is also used to implement other data structures like stack, queue and deque. Here’s the comparison of Linked List vs Arrays

### Use Cases  
- Efficient insertions and deletions in dynamic applications  
- Implementing stacks and queues  
- Memory-efficient data management when frequent resizing is needed  

### Advantages  
✔️ Efficient insertions and deletions (O(1) at the head)  
✔️ No need for contiguous memory allocation  

### Disadvantages  
❌ Slower access time compared to arrays (O(n) for lookup)  
❌ Extra memory overhead due to pointers  

---

## 📦 3. Stack  
### Description  
A stack is a Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end (the top of the stack).  

### Use Cases  
- Undo/redo functionality in applications  
- Function call stack in programming languages  
- Expression evaluation (e.g., parentheses matching)  

### Advantages  
✔️ Simple and efficient (O(1) for push and pop operations)  
✔️ Helps manage recursive function calls  

### Disadvantages  
❌ Limited access (only the top element can be accessed)  
❌ Can lead to stack overflow in recursive applications  

---

## 🚦 4. Queue  
### Description  
A queue is a First-In-First-Out (FIFO) data structure where elements are added at the back and removed from the front.  

### Use Cases  
- Task scheduling (e.g., print queue, request processing)  
- Managing asynchronous operations (e.g., event loops, job queues)  
- Implementing breadth-first search (BFS) in graphs  

### Advantages  
✔️ Maintains order of processing requests  
✔️ Efficient O(1) enqueue and dequeue operations in a linked list implementation  

### Disadvantages  
❌ Slower element access (O(n) lookup)  
❌ Array-based implementations require shifting elements for dequeue (O(n))  

---

## 🔑 5. Hash Table (Object/Map)  
### Description  
A hash table is a data structure that stores key-value pairs for fast lookups. In JavaScript, objects and `Map` structures serve as hash tables.  

### Use Cases  
- Implementing dictionaries and caches  
- Storing and retrieving data efficiently  
- Managing sets of unique keys  

### Advantages  
✔️ Fast lookups, insertions, and deletions (O(1) on average)  
✔️ No need to iterate over elements for searching  

### Disadvantages  
❌ Possible hash collisions, which degrade performance  
❌ Consumes extra memory for storing hash keys  

---

## 🌳 6. Binary Tree  
### Description  
A binary tree is a hierarchical data structure where each node has at most two children (left and right). A binary search tree (BST) maintains a sorted order of elements.  

### Use Cases  
- Efficient searching and sorting  
- Implementing hierarchical structures (e.g., DOM tree)  
- Decision-making processes (e.g., game AI, expression trees)  

### Advantages  
✔️ Faster search compared to linked lists (O(log n) in balanced trees)  
✔️ Good for hierarchical data representation  

### Disadvantages  
❌ Unbalanced trees can degrade performance to O(n)  
❌ Requires additional memory for pointers  

---

## 🔗 7. Graph  
### Description  
A graph is a data structure consisting of nodes (vertices) connected by edges. It can be directed or undirected.  

### Use Cases  
- Representing networks (social networks, web links, transport routes)  
- Pathfinding algorithms (Dijkstra’s, A*)  
- Dependency resolution (e.g., task scheduling, package management)  

### Advantages  
✔️ Powerful representation for complex relationships  
✔️ Supports a variety of traversal techniques (DFS, BFS)  

### Disadvantages  
❌ More complex implementation compared to other structures  
❌ Requires additional memory for adjacency lists or matrices  

---

## Conclusion  
Each data structure has its strengths and weaknesses. Choosing the right one depends on the specific problem, performance requirements, and memory constraints.  

For implementation details and examples, refer to the respective files in this repository.  
