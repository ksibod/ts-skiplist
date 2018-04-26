import test from 'ava'
import Utils, { flipCoin } from '../src/Utils'


export default (): void => {

    test('Utils::flipCoin() will return true || false', t => {
        const toss = Utils.flipCoin()
        t.true(typeof toss === 'boolean')
        if (toss) {
            t.truthy(toss)
        }
        else {
            t.falsy(toss)
        }
    })

    test('Utils::getLevel() will return a value >= 1 and <= max_value', t => {
        const max = 10
        const level = Utils.getLevel(max)
        t.truthy(level)
        t.true(level >= 1)
        t.true(level <= max)
    })

}