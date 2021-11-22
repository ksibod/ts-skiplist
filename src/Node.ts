class Node<T> {

    public value: T;
    public counter: number;
    public pointers: Node<T>[];

    constructor(level: number, val?: T) {
        this.value = val || null;
        this.counter = val ? 1 : 0;
        this.pointers = Array<Node<T>>(level + 1);
    }

    increment(): void {
        this.counter++;
    }

}


export default Node;