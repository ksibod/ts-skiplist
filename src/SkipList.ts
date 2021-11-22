import { Node } from './Node';
import { NIL } from './Constants';
import { getLevel } from './Utils';


export class SkipList<T> {

    private head: Node<T>;
    private updateNodes: Node<T>[];
    public level: number;
    public size: number;

    constructor(level: number) {
        this.head = new Node<T>(level, NIL);
        this.updateNodes = Array<Node<T>>(level);
        this.level = level;
        this.size = 0;
    }

    public insert(val: T): void {
        // Start at the head node
        let tempNode = this.head;

        // Iterate through levels of the list
        for (let i=this.level; i>0; i--) {
            while (tempNode.pointers[i] && tempNode.pointers[i].value < val) {
                tempNode = tempNode.pointers[i];
            }
            // Update node will hold tempNode - used later for new value to insert
            this.updateNodes[i] = tempNode;
        }

        // Get next element in list to compare with previous (updateNodes[i])
        tempNode = tempNode.pointers[1];

        // If temp is last in list or the value != new value, add to list
        if (!tempNode || tempNode.value != val) {
            const newLevel = getLevel(this.level);
            tempNode = new Node<T>(newLevel, val);
            for (let i=1; i<=newLevel; i++) {
                tempNode.pointers[i] = this.updateNodes[i].pointers[i];
                this.updateNodes[i].pointers[i] = tempNode;
            }
            this.size++;
        }
        // If value is equal to new value
        else if (tempNode.value == val) {
            tempNode.increment();
        }
    }

    public remove(val: T): void {
        // Start at the head node
        let tempNode = this.head;

        // Iterate through levels of the list
        for (let i=this.level; i>0; i--) {
            while (tempNode.pointers[i] && tempNode.pointers[i].value < val) {
                tempNode = tempNode.pointers[i];
            }
            // Update node will hold tempNode - used later for new value to remove
            this.updateNodes[i] = tempNode;
        }

        // Get next element in list to compare with previous (updateNodes[i])
        tempNode = tempNode.pointers[1];

        // If we found it in the list, 
        if (tempNode && tempNode.value == val) {
            // Iterate through levels of list
            for (let i=1; i<=this.level; i++) {
                if (this.updateNodes[i].pointers[i] == tempNode) {
                    this.updateNodes[i].pointers[i] = tempNode.pointers[i];
                }
            }
            this.size--;
        }
    }

    public find(val: T): Node<T> | undefined {
        // Start at the head node
        let tempNode = this.head;

        // Iterate through levels of the list
        for (let i=this.level; i>0; i--) {
            while (tempNode.pointers[i] && tempNode.pointers[i].value < val) {
                tempNode = tempNode.pointers[i];
            }
        }

        // Set tempNode to the next element in the list because the current value is
        // less than whatever we are trying to find.  So the next element is either the
        // value we are looking for, or it is not in the list
        tempNode = tempNode.pointers[1];

        if (tempNode && tempNode.value == val) {
            return tempNode;
        }
    }

}
