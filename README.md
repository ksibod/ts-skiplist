# Probablistic Skip List 
### *Probably* my favorite data structure.  **O(log n)**
**Implementation in TypeScript**

Feel free to read up on them if you are interested.

This lib includes a basic implementation with a few exposed methods.  The skip list is genericized for whatever data you are trying to store/lookup.

```
import { SkipList } from 'ts-skiplist';
const numSkipList = new SkipList<number>(maxLevel: number);
const strSkipList = new skipList<string>(maxLevel);
```
*__maxLevel__ is determined by you, the user.  In this implementation, __p = 0.5__, so for example, using a maxLevel of 16 is sufficient for a list containing up to __2^16__ values.*

#
## Skip List Methods
### **insert** -> `void`
```
numSkipList.insert(4);
numSkipList.insert(6);

strSkipList.insert('apple');
strSkipList.insert('banana');
```
### **remove** -> `void`
*If the value being removed is not in the list, nothing happens*

```
numSkipList.remove(4);
numSkipList.remove(6);

strSkipList.remove('apple');
strSkipList.remove('banana');
```
### **find** -> `Node<T> | undefined`
```
const num = numSkipList.find(4);
const seven = numSkipList.find(7); // undefined because it is not found in the list

const str = strSkipList.find('apple');
```
#
## `Node<T>`
The node contains the data value in the `value` attribute.  Along with the `counter` and `pointers` fields should they need to be utilized.  Additionally, there is an exposed `increment()` method that will increment the counter field by 1 (++).
```
public value: T;
public counter: number;
public pointers: Node<T>[];
public increment(): void {
    this.counter++;
}
```