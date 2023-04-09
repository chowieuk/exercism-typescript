export class LinkedList<T> {
    list: Array<T>;
    constructor() {
        this.list = [];
    }
    public push(element: T) {
        return this.list.push(element);
    }
    public pop() {
        return this.list.pop();
    }
    public shift() {
        return this.list.shift();
    }
    public unshift(element: T) {
        return this.list.unshift(element);
    }
    public delete(element: T) {
        this.list = this.list.filter((elem) => elem != element);
    }
    public count() {
        return this.list.length;
    }
}
