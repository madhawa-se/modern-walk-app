export function calcWidth(amount: number) {
    if (amount === 0) {
        return '0px';
    }
    return `${100 / amount}px`;
}