
const P = 0.5

export const flipCoin = (): boolean => Math.random() > P

export const getLevel = (maxLevel: number): number => {
    let level: number = 1
    while (flipCoin() && level < maxLevel) {
        level++
    }
    return level
}

export default {
    flipCoin,
    getLevel
}