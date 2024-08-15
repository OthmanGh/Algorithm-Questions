class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  removeNodes(num) {}
}
