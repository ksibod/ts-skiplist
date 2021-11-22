import { describe, it, expect, time } from 'ts-simple-test';
import { SkipList } from '../src/SkipList';

const maxLevel = 10;
let skipListNum: SkipList<number>;
let skipListString: SkipList<string>;

describe('SkipList tests', () => {
    it('Create a new SkipList (with initial size of 0)', () => {
        skipListNum = new SkipList<number>(maxLevel);
        skipListString = new SkipList<string>(maxLevel);

        expect(skipListNum.size).toBe(0);
        expect(skipListString.size).toBe(0);
    });
  
    it('Insert into SkipList', () => {
        skipListNum.insert(2);
        skipListNum.insert(4);
        skipListNum.insert(6);

        skipListString.insert('apple');
        skipListString.insert('banana');
        skipListString.insert('carrot');

        expect(skipListNum.size).toBe(3);
        expect(skipListString.size).toBe(3);
    });

    it('Remove from SkipList', () => {
        skipListNum.remove(2);
        skipListNum.remove(8);  // 8 is not in the list, nothing will actually be removed

        skipListString.remove('apple');
        skipListString.remove('not in skiplist');

        expect(skipListNum.size).toBe(2);
        expect(skipListString.size).toBe(2);
    });

    it('Find in SkipList', () => {
        expect(skipListNum.find(6)?.value).toBeTruthy();
        expect(skipListString.find('banana')?.value).toBeTruthy();
    });

    it('Add 100,000 items into SkipList<number>', () => {
        time(() => {
            for (let i=0; i<100000; i++) {
                skipListNum.insert(i);
            }
            expect(skipListNum.size).toBe(100000);
        });
    });
    
    it('Add 100,000 items into SkipList<string>', () => {
        time(() => {
            for (let i=0; i<100000; i++) {
                skipListString.insert(`number-${i}`);
            }
            expect(skipListString.size).toBe(100002);
        });
    });
    
    it('Find elements in SkipList', () => {
        time(() => {
            expect(skipListNum.find(10000)?.value).toBeTruthy();
            expect(skipListString.find('number-10000')?.value).toBeTruthy();
        });
    });
    
    it('Remove elements in SkipList', () => {
        time(() => {
            skipListNum.remove(10000);
            skipListString.remove('number-10000');
            expect(skipListNum.size).toBe(99999);
            expect(skipListString.size).toBe(100001);
        });
    });
});
