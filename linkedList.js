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

  printAll() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }

    console.log(null);
  }
}

const ll = new LinkedList();

ll.add(10);
ll.add(5);
ll.add(12);
ll.add(7);
ll.add(3);
ll.add(9);
ll.add(10);

ll.removeNodes(7);

ll.printAll();
