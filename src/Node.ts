import { NIL } from './Constants'
import { getLevel } from './Utils'


class Node<T> {

    value: T
    counter: number
    pointers: Node<T>[]

    constructor(level: number, val?: T) {
        this.value = val || null
        this.counter = val ? 1 : 0
        this.pointers = Array<Node<T>>(level + 1)
    }

    increment(): void {
        this.counter++
    }

}


export default Node