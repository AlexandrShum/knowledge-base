/* =================================================== Array Implementation of a Queue =================================================== */

class ArrayQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.isEmpty() ? "Queue is empty" : this.items.shift();
  }

  peek() {
    return this.isEmpty() ? "Queue is empty" : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" -> "));
  }
}

// Example usage:
const arrayQueue = new ArrayQueue();
arrayQueue.enqueue(1);
arrayQueue.enqueue(2);
arrayQueue.enqueue(3);
arrayQueue.print();
console.log(arrayQueue.dequeue());
console.log(arrayQueue.peek());
console.log(arrayQueue.size()); 

/* =================================================== Linked List Implementation of Queue =================================================== */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    this.size--;
    return removedNode.data;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.data;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    let current = this.front;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(' -> '));
  }
}

// Example Usage:
const linkedListQueue = new LinkedListQueue();
linkedListQueue.enqueue(10);
linkedListQueue.enqueue(20);
linkedListQueue.enqueue(30);
linkedListQueue.print();

console.log(linkedListQueue.dequeue());
linkedListQueue.print();

console.log(linkedListQueue.peek());
console.log(linkedListQueue.getSize());
console.log(linkedListQueue.isEmpty()); 

