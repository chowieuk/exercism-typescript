class Node<TElement> {
    element: TElement;
    next: Node<TElement> | null;
    prev: Node<TElement> | null;

    constructor(element: TElement) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

export class LinkedList<TElement> {
    private head: Node<TElement> | null;
    private tail: Node<TElement> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public push(element: TElement) {
        const newNode = new Node(element);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
    }

    public pop(): TElement | null {
        if (!this.tail) {
            return null;
        }

        const removedElement = this.tail.element;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        }

        return removedElement;
    }

    public shift(): TElement | null {
        if (!this.head) {
            return null;
        }

        const removedElement = this.head.element;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        }

        return removedElement;
    }

    public unshift(element: TElement) {
        const newNode = new Node(element);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    public delete(element: TElement): boolean {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.element === element) {
                if (currentNode.prev) {
                    currentNode.prev.next = currentNode.next;
                } else {
                    this.head = currentNode.next;
                }

                if (currentNode.next) {
                    currentNode.next.prev = currentNode.prev;
                } else {
                    this.tail = currentNode.prev;
                }

                return true;
            }

            currentNode = currentNode.next;
        }

        return false;
    }

    public count(): number {
        let count = 0;
        let currentNode = this.head;

        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }
}
