
const P = 0.5;

export const flipCoin = () => Math.random() > P;

export const getLevel = (maxLevel: number): number => {
    let level = 1;
    while (flipCoin() && (level < maxLevel)) {
        level++;
    }
    return level;
};
