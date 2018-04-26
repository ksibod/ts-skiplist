import test from 'ava'
import unit from './unit'
import perf from './perf'

import SkipList from '../src/SkipList'

const maxLevel = 10
let skipListNum: SkipList<number>
let skipListString: SkipList<string>


// Run imported tests
unit()

test('Create a new SkipList', t => {
    skipListNum = new SkipList<number>(maxLevel)
    skipListString = new SkipList<string>(maxLevel)

    t.true(skipListNum.size === 0)
    t.true(skipListString.size === 0)
})

test('Insert into SkipList', t => {
    skipListNum.insert(2)
    skipListNum.insert(4)
    skipListNum.insert(6)

    skipListString.insert('apple')
    skipListString.insert('banana')
    skipListString.insert('carrot')

    t.true(skipListNum.size === 3)
    t.true(skipListString.size === 3)
})

test('Remove from SkipList', t => {
    skipListNum.remove(2)
    skipListNum.remove(8)  // 8 is not in the list, nothing will actually be removed

    skipListString.remove('apple')
    skipListString.remove('not in skiplist')

    t.true(skipListNum.size === 2)
    t.true(skipListString.size === 2)
})

test('Find in SkipList', t => {
    t.truthy(skipListNum.find(6))
    t.truthy(skipListString.find('banana'))
})



test('Add 100,000 items into SkipList<number>', t => {

    perf(() => {
        for (let i=0; i<100000; i++) {
            skipListNum.insert(i)
        }
        t.true(true)
    })
    
})

test('Add 100,000 items into SkipList<string>', t => {

    perf(() => {
        for (let i=0; i<100000; i++) {
            skipListString.insert(`number-${i}`)
        }
        t.true(true)
    })

})

test('Find elements in SkipList', t => {

    perf(() => {
        t.truthy(skipListNum.find(10000))
        t.truthy(skipListString.find('number-10000'))
    })

})

test('Remove elements in SkipList', t => {

    perf(() => {
        skipListNum.remove(10000)
        skipListString.remove('number-10000')
        t.truthy(skipListNum.size === 99999)
        t.truthy(skipListString.size === 100001)
    })

})