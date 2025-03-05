/* =================================================== Array Implementation of a Stack =================================================== */

class Stack {
  constructor() {
    this.items = [];
  }

  // Push operation
  push(element) {
    this.items.push(element);
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty operation
  isEmpty() {
    return this.items.length === 0;
  }

  // Size operation
  size() {
    return this.items.length;
  }

  // Print the stack 
  print() {
    console.log(this.items);
  }
}

console.time("1")
// Example Usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();
console.timeEnd("1")


/* =================================================== Linked List Implementation of Stack =================================================== */

// Node class representing each element in the stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack class using a Linked List
class LinkedListStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Push operation
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty!");
      return null;
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  // Peek operation
  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Returns the size of the stack
  getSize() {
    return this.size;
  }

  // Print stack elements
  printStack() {
    let current = this.top;
    let stackValues = [];
    while (current) {
      stackValues.push(current.value);
      current = current.next;
    }
    console.log("Stack:", stackValues.join(" -> "));
  }
}

// Example Usage
console.time("2")
const linkedList = new LinkedListStack();
linkedList.push(10);
linkedList.push(20);
linkedList.push(30);
linkedList.printStack();
console.log("Top Element:", linkedList.peek());
console.log("Popped Element:", linkedList.pop());
linkedList.printStack(); 
console.timeEnd("2")

