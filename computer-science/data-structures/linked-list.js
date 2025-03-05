/* =================================================== Singly Linked List =================================================== */

// Definition of a Node in a singly linked list
class SinglyNode {
    constructor(value) {
      this.data = value; // Data part of the node
      this.next = null;
    }
}

// Define Linked List class 
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert new Node to end of list
  append (value) {
    const newNode = new SinglyNode(value);

    if (!this.head) { // If the list is empty, we set our node as the head of the list
      this.head = newNode;

      return;
    }

    let current = this.head;

    while (current.next) { // Find the last element of the list
      current = current.next;
    }

    current.next = newNode; // Add the new Node to the end of the list
  }

  appendToStart (value) { // Add new Node to start of list
    const newNode = new SinglyNode(value);
    
    newNode.next = this.head;
    this.head = newNode;
  }

  print () {
    console.log(JSON.stringify(this)); // Log our linked list as JSON
  }
}

/* ----- Example ----- */
// Uncomment it if you want to test

// const linkedList = new SinglyLinkedList();

// linkedList.append("First");
// linkedList.append("Second");
// linkedList.append("Third");
// linkedList.append("Fourth");
// linkedList.appendToStart("Wow, now I'm the boss!");

// linkedList.print();

/* ----- Example ----- */



/* =================================================== Doubly Linked List =================================================== */

class DoublyNode {
  constructor(data) {
    this.data = data;

    this.prev = null; // Reference to the previous node
    this.next = null; // Reference to the next node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert new Node to end of list
  append(value) {
    const newNode = new DoublyNode(value);

    if (!this.head) { // If the list is empty, we set our node as the head of the list
      this.head = newNode;
      this.tail = newNode;

      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  appendToStart(value) {
    const newNode = new DoublyNode(value);

    if (!this.head) { // If the list is empty
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode; // Update head to the new node
  }

  deleteFromEnd() {
    if(!this.tail && !this.head) {
      return;
    }
    const oldTail = this.tail.value;

    if (this.tail.prev === null) {
      this.tail = null;
      this.head = null;
  
      return oldTail;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    return oldTail;
  }

  deleteFromIndex(index) {
    let count = 0;

    if (!this.tail && !this.head) {
      return;
    }
    let current = this.head;

    while (count < index) {
      current = current.next;
      count++;
    }

    var next = current.next;
    var prev = current.prev;

    prev.next = current.next;
    next.prev = current.prev;


    return current.value;
  }

  print() {
    console.log(this); // Log our linked list as JSON
  }
}

const linkedList = new DoublyLinkedList();


linkedList.append("First");
linkedList.append("Second");
linkedList.append("Third");
linkedList.append("Fourth");
linkedList.appendToStart("Wow, now I'm the boss!");
linkedList.deleteFromEnd();
linkedList.deleteFromEnd();

linkedList.print();

const arr = new Array();

